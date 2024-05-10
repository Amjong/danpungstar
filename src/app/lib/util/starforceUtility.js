const { getItemLevelFromTable } = require('../../data/itemLevelInfo');
const {
  getStarForceUrl,
  getOcidFromNickname,
  getCharacterBasicInfo,
  getCharacterItemEquipmentUrl,
} = require('./openApiManager');

const { items } = require('../../data/itemInfo');

/* TODO : Save static table for each level&starforceCount to optimizing */
const calculateCost = (Itemlevel, starforceCount, date) => {
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

const getSuccessRate = (starforceCount) => {
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

const getItemEquipmentInfo = async (nickname) => {
  console.log(`${nickname} 조회 시작`);
  const ocidResponse = await getOcidFromNickname(nickname);
  const ocid = ocidResponse.ocid;
  console.log(ocid);
  const response = await fetch(
    getCharacterItemEquipmentUrl(ocid, '2024-05-05'),
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_API_KEY,
      },
    }
  );

  console.log(`${nickname} 데이터 받아옴`);

  if (!response.ok) {
    throw new Error(response.status);
  }

  const finalResponse = await response.json();
  finalResponse.item_equipment.forEach((element) => {
    const name = element.item_name;
    items.forEach((item) => {
      if (item.name === name) {
        item.imageUrl = element.item_icon;
        console.log(`${item.name} -> ${item.imageUrl}`);
      }
    });
  });

  console.log(`${nickname} 데이터 파싱 완료`);
};

const printItems = () => {
  items.forEach((element) => {
    console.log(`{
      name: '${element.name}',
      level: ${element.level},
      imageUrl: '${element.imageUrl}',
    },`);
  });
};

const getStarForceInfo = async (apikey, dateString) => {
  let cursor = undefined;
  let starforceHistoryArray = [];
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
    finalResponse.starforce_history.forEach((element) => {
      starforceHistoryArray.push(element);
    });
    if (finalResponse.next_cursor) {
      cursor = finalResponse.next_cursor;
      continue;
    } else {
      return starforceHistoryArray;
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

const calculateCostForEachItemsFromArray = (starforceInfoArray) => {
  let itemsAndCost = new Map();

  starforceInfoArray.forEach((element) => {
    let currentCost = 0;
    let itemLevel = getItemLevelFromTable(element.target_item);
    if (itemLevel === undefined) {
      return;
    }
    let originalCost = calculateCost(
      itemLevel,
      element.before_starforce_count,
      element.date_create
    );

    currentCost = applyStarforceEventList(
      element.starforce_event_list,
      originalCost
    );

    if (element.destroy_defence === '파괴 방지 적용') {
      currentCost += originalCost;
    }

    let currentKey = [
      element.target_item,
      `${element.world_name}/${element.character_name}`,
    ].join('|');

    if (!itemsAndCost.has(currentKey)) {
      itemsAndCost.set(currentKey, currentCost);
    } else {
      const currentCostofItem = itemsAndCost.get(currentKey);
      itemsAndCost.set(currentKey, currentCostofItem + currentCost);
    }
  });

  return itemsAndCost;
};

const isFiveTenFifteenSuccessEvent = (element) => {
  if (
    element.starforce_event_list === undefined ||
    element.starforce_event_list === null
  ) {
    return false;
  }

  if (
    !(
      element.before_starforce_count === 5 ||
      element.before_starforce_count === 10 ||
      element.before_starforce_count === 15
    )
  ) {
    return false;
  }

  let isFiveTenFifteenSuccessEvent = false;

  element.starforce_event_list.forEach((event) => {
    if (
      event.success_rate === '100,100,100' &&
      event.starforce_event_range === '5,10,15'
    ) {
      isFiveTenFifteenSuccessEvent = true;
      console.log('is 15 16 100%');
      return;
    }
  });

  return isFiveTenFifteenSuccessEvent;
};

const getStarforceResultInfo = (starforceInfoArray) => {
  let starforceResultInfo = Array.from({ length: 25 }, () => Array(6).fill(0));

  starforceInfoArray.forEach((element) => {
    // Calculate starcatch result (trial count)

    if (isFiveTenFifteenSuccessEvent(element)) {
      // Do not checking 100% success case
      return;
    }

    if (element.starcatch_result === '성공') {
      starforceResultInfo[element.before_starforce_count][0]++;
    } else {
      starforceResultInfo[element.before_starforce_count][1]++;
    }

    // Calculate starforce result (success, failure, destroy)
    if (element.item_upgrade_result === '성공') {
      starforceResultInfo[element.before_starforce_count][2]++;
    } else if (element.item_upgrade_result === '파괴') {
      starforceResultInfo[element.before_starforce_count][4]++;
    } else {
      starforceResultInfo[element.before_starforce_count][3]++;
    }
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

const getStarforceProgressInfo = (starforceInfoArray) => {
  let itemsAndProgressInfo = new Map();

  starforceInfoArray.forEach((element) => {
    if (!itemsAndProgressInfo.has(element.target_item)) {
      let firstArray = [
        element.after_starforce_count,
        element.before_starforce_count,
      ];
      itemsAndProgressInfo.set(element.target_item, firstArray);
    } else {
      let progressInfoArray = itemsAndProgressInfo.get(element.target_item);
      itemsAndProgressInfo.set(element.target_item, [
        ...progressInfoArray,
        element.after_starforce_count,
      ]);
    }
  });

  return itemsAndProgressInfo;
};

const getRepresentativeCharacter = async (starforceInfoArray) => {
  let characterNameSet = new Set();
  let mostCurrentDate = new Date(0);

  starforceInfoArray.forEach((element) => {
    if (!characterNameSet.has(element.character_name)) {
      characterNameSet.add(element.character_name);
    }
    if (mostCurrentDate < new Date(element.date_create)) {
      mostCurrentDate = new Date(element.date_create);
    }
  });

  let representativeCharacterInfo = {};
  let currentLevel = 0;

  for (const element of characterNameSet) {
    try {
      const ocidResponse = await getOcidFromNickname(element);
      const basicInfoResponse = await getCharacterBasicInfo(
        ocidResponse.ocid,
        mostCurrentDate.toISOString().slice(0, 10)
      );
      if (currentLevel < basicInfoResponse.character_level) {
        representativeCharacterInfo['characterName'] = element;
        representativeCharacterInfo['characterLevel'] =
          basicInfoResponse.character_level;
        representativeCharacterInfo['characterImage'] =
          basicInfoResponse.character_image;
        currentLevel = basicInfoResponse.character_level;
      }
    } catch (error) {
      // 에러 처리
    }
  }

  return representativeCharacterInfo;
};

module.exports = {
  calculateCost,
  getStarForceInfo,
  calculateCostForEachItemsFromArray,
  getStarforceResultInfo,
  getStarforceProgressInfo,
  getRepresentativeCharacter,
  getItemEquipmentInfo,
  printItems,
};
