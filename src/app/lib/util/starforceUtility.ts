import { starforceHistory, starforceInfo } from './../../types/starforce';

const { getItemsMap } = require('../../data/ItemInfo');
const { getStarForceUrl } = require('./openApiManager');

/* TODO : Save static table for each level&starforceCount to optimizing */
export const calculateCost = (
  Itemlevel: number,
  starforceCount: number,
  date
) => {
  let finalCost = 1000;
  if (starforceCount >= 25 || starforceCount < 0) {
    console.log('Invalid starforceCount (' + starforceCount + ')');
    return 0;
  }

  if (starforceCount < 10) {
    finalCost += (Itemlevel ** 3 * (starforceCount + 1)) / 25;
  } else {
    finalCost += Itemlevel ** 3 * (starforceCount + 1) ** 2.7;
    if (starforceCount < 11) {
      finalCost /= 400;
    } else if (starforceCount < 12) {
      finalCost /= 220;
    } else if (starforceCount < 13) {
      finalCost /= 150;
    } else if (starforceCount < 14) {
      finalCost /= 110;
    } else if (starforceCount < 15) {
      finalCost /= 75;
    } else {
      finalCost /= 200;
    }
  }

  // Apply starforce patch (2024-01-25, 30% discount for 0~14 steps)
  if (starforceCount < 15 && new Date(date) >= new Date('2024-01-25')) {
    finalCost *= 0.7;
  }

  return Math.round(finalCost / 10) * 10;
};

const getSuccessRate = (starforceCount: number) => {
  if (starforceCount < 3) {
    return (95 - 5 * starforceCount) / 100;
  } else if (starforceCount < 15) {
    return (100 - 5 * starforceCount) / 100;
  } else if (starforceCount < 23) {
    return 30 / 100;
  } else if (starforceCount < 24) {
    return 3 / 100;
  } else if (starforceCount < 25) {
    return 2 / 100;
  } else return 1 / 100;
};

export const getStarForceInfo: (
  apikey: string,
  dateString: string
) => Promise<starforceHistory> = async (apikey: string, dateString: string) => {
  let cursor = undefined;
  let starforceHistoryArray: starforceInfo[] = [];
  while (true) {
    let date = cursor ? undefined : dateString;
    const response = await fetch(getStarForceUrl(102, date, cursor), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-nxopen-api-key': apikey,
      },
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const finalResponse = await response.json();
    const currentStarforceInfoArray =
      finalResponse.starforce_history as starforceInfo[];
    currentStarforceInfoArray.forEach((info) => {
      starforceHistoryArray.push(info);
    });
    if (finalResponse.next_cursor) {
      cursor = finalResponse.next_cursor;
      continue;
    } else {
      return {
        date: new Date(dateString),
        infoArray: [...starforceHistoryArray],
      };
    }
  }
};

const applyStarforceEventList = (eventListArray, currentCost) => {
  if (!eventListArray) {
    return currentCost;
  }

  let totalDiscountRate = 0;
  let finalCost = currentCost;

  eventListArray.forEach((element) => {
    if (element.cost_discount_rate !== 'null') {
      totalDiscountRate += parseInt(element.cost_discount_rate);
    }
  });

  finalCost *= 1 - totalDiscountRate / 100;
  return Math.round(finalCost / 10) * 10;
};

export const getCostFromStarforceHistory = (
  starforceHistoryArray: starforceHistory[],
  startDate: Date,
  endDate: Date
) => {
  let itemsAndCost = new Map();

  starforceHistoryArray.forEach(({ date, infoArray }) => {
    if (date < startDate || date > endDate) {
      return;
    }
    infoArray.forEach((info) => {
      let currentCost = 0;
      const itemsMap = getItemsMap();
      if (!itemsMap.has(info.target_item)) {
        return;
      }
      let itemLevel = itemsMap.get(info.target_item).level;
      let itemImageUrl = itemsMap.get(info.target_item).imageUrl;
      let originalCost = calculateCost(
        itemLevel,
        info.before_starforce_count,
        info.date_create
      );

      currentCost = applyStarforceEventList(
        info.starforce_event_list,
        originalCost
      );

      if (info.destroy_defence === '파괴 방지 적용') {
        currentCost += originalCost;
      }

      let currentKey = [
        info.target_item,
        `${info.world_name}/${info.character_name}`,
        itemImageUrl,
      ].join('|');

      if (!itemsAndCost.has(currentKey)) {
        itemsAndCost.set(currentKey, currentCost);
      } else {
        const currentCostofItem = itemsAndCost.get(currentKey);
        itemsAndCost.set(currentKey, currentCostofItem + currentCost);
      }
    });
  });

  return itemsAndCost;
};

const isFiveTenFifteenSuccessEvent = (info: starforceInfo) => {
  if (
    info.starforce_event_list === undefined ||
    info.starforce_event_list === null
  ) {
    return false;
  }

  if (
    !(
      info.before_starforce_count === 5 ||
      info.before_starforce_count === 10 ||
      info.before_starforce_count === 15
    )
  ) {
    return false;
  }

  let isFiveTenFifteenSuccessEvent = false;

  info.starforce_event_list.forEach((event) => {
    if (
      event.success_rate === '100,100,100' &&
      event.starforce_event_range === '5,10,15'
    ) {
      isFiveTenFifteenSuccessEvent = true;
      return;
    }
  });

  return isFiveTenFifteenSuccessEvent;
};

export const getStarforceResultInfo = (
  starforceHistoryArray: starforceHistory[],
  startDate: Date,
  endDate: Date
) => {
  let starforceResultInfo = Array.from({ length: 25 }, () => Array(6).fill(0));

  starforceHistoryArray.forEach(({ date, infoArray }) => {
    if (date < startDate || date > endDate) {
      return;
    }
    // Calculate starcatch result (trial count)
    infoArray.forEach((info) => {
      if (isFiveTenFifteenSuccessEvent(info)) {
        // Do not checking 100% success case
        return;
      }
      if (info.starcatch_result === '성공') {
        starforceResultInfo[info.before_starforce_count][0]++;
      } else {
        starforceResultInfo[info.before_starforce_count][1]++;
      }

      // Calculate starforce result (success, failure, destroy)
      if (info.item_upgrade_result === '성공') {
        starforceResultInfo[info.before_starforce_count][2]++;
      } else if (info.item_upgrade_result === '파괴') {
        starforceResultInfo[info.before_starforce_count][4]++;
      } else {
        starforceResultInfo[info.before_starforce_count][3]++;
      }
    });
  });

  // Calculate starcatch result (average)
  starforceResultInfo.forEach((element, index) => {
    let successRate = getSuccessRate(index);
    let starcatchSuccessRate = successRate * 1.05;
    element[5] = (
      element[0] * starcatchSuccessRate +
      element[1] * successRate
    ).toFixed(2);
  });

  return starforceResultInfo;
};

export const getStarforceProgressInfo = (
  starforceHistoryArray: starforceHistory[],
  startDate: Date,
  endDate: Date
) => {
  let itemsAndProgressInfo = new Map();

  starforceHistoryArray.forEach(({ date, infoArray }) => {
    if (date < startDate || date > endDate) {
      return;
    }
    infoArray.forEach((info) => {
      if (!itemsAndProgressInfo.has(info.target_item)) {
        let firstArray = [
          info.after_starforce_count,
          info.before_starforce_count,
        ];
        itemsAndProgressInfo.set(info.target_item, firstArray);
      } else {
        let progressInfoArray = itemsAndProgressInfo.get(info.target_item);
        itemsAndProgressInfo.set(info.target_item, [
          ...progressInfoArray,
          info.after_starforce_count,
        ]);
      }
    });
  });

  return itemsAndProgressInfo;
};

// const getRepresentativeCharacter = async (starforceInfoArray) => {
//   let characterNameSet = new Set();
//   let mostCurrentDate = new Date(0);

//   starforceInfoArray.forEach((element) => {
//     if (!characterNameSet.has(element.character_name)) {
//       characterNameSet.add(element.character_name);
//     }
//     if (mostCurrentDate < new Date(element.date_create)) {
//       mostCurrentDate = new Date(element.date_create);
//     }
//   });

//   let representativeCharacterInfo = {};
//   let currentLevel = 0;

//   for (const element of characterNameSet) {
//     try {
//       const ocidResponse = await getOcidFromNickname(element);
//       const basicInfoResponse = await getCharacterBasicInfo(
//         ocidResponse.ocid,
//         mostCurrentDate.toISOString().slice(0, 10)
//       );
//       if (currentLevel < basicInfoResponse.character_level) {
//         representativeCharacterInfo['characterName'] = element;
//         representativeCharacterInfo['characterLevel'] =
//           basicInfoResponse.character_level;
//         representativeCharacterInfo['characterImage'] =
//           basicInfoResponse.character_image;
//         currentLevel = basicInfoResponse.character_level;
//       }
//     } catch (error) {
//       // 에러 처리
//     }
//   }

//   return representativeCharacterInfo;
// };
