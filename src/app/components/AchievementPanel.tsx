import { useMemo } from 'react';
import { useUserInfo } from '../context/userInfoContext';
import MasterCard from '../ui/MasterCard';
import PeriodSelectPanel from './PeriodSelectPanel';
import { getAchievementInfoFromStarforceHistory } from '../lib/util/starforceUtility';
import { useStarforceHistoryArray } from '../context/starforceContext';
import { formatNumberToKorean } from '../lib/util/generalUtility';

export default function AchievementPanel() {
  const [{ startDate, endDate }] = useUserInfo();
  const [starforceHistoryArray] = useStarforceHistoryArray();
  const {
    mostConsecutiveSuccess,
    mostConsecutiveFailure,
    totalStarforceCount,
    totalStarcatchSuccessCount,
    totalCost,
    totalDiscountCost,
  } = useMemo(() => {
    return getAchievementInfoFromStarforceHistory(
      starforceHistoryArray,
      startDate,
      endDate
    );
  }, [starforceHistoryArray, startDate, endDate]);

  return (
    <div className='flex flex-col'>
      <div className='text-white font-regular text-[12px] ml-3'>
        * 스타포스 정보는 최대 5분 후 반영됩니다.
        <br />* 2023년 12월 27일 이후의 데이터만 조회 가능합니다.
      </div>
      <PeriodSelectPanel />
      <div className='grid grid-cols-2 gap-8 px-20 my-20 tracking-wide'>
        <MasterCard className='col-span-2'>
          <div className='flex flex-col w-full mx-5 items-center justify-center'>
            <div className='font-bold text-white text-center text-xl pb-10'>
              총 사용 메소량/할인으로 아낀 메소량
            </div>
            <div className='font-regular text-white flex space-x-4'>
              <div className='py-2 flex flex-col space-y-[48px] mt-6'>
                <div className='text-sm'>스타포스 강화에 총 </div>
                <div className='text-sm text-y4'>할인 이벤트로 </div>
                <div className='text-y4'>할인율 </div>
              </div>
              <div className='flex flex-col'>
                <div className='font-bold text-2xl'>
                  {formatNumberToKorean(totalCost) || 0}
                </div>
                <div className='font-bold text-y4 text-2xl'>
                  {formatNumberToKorean(totalDiscountCost) || 0}
                </div>
                <div className='text-y4 font-bold text-2xl'>
                  <span>
                    {Math.round(
                      (totalDiscountCost / (totalCost + totalDiscountCost)) *
                        100 *
                        10
                    ) / 10 || 0}
                  </span>
                  <span className='font-regular text-sm'> %</span>
                </div>
              </div>
              <div className='py-2 flex flex-col space-y-[48px] mt-6'>
                <div className='text-sm'> 메소를 사용하고</div>
                <div className='text-sm text-y4'> 메소를 아꼈어요</div>
              </div>
            </div>
          </div>
        </MasterCard>
        <MasterCard>
          <div className='flex flex-col w-full h-full mx-5 justify-between items-center'>
            <div className='h-[20%]'>
              <div className='font-regular text-white text-sm text-center'>
                15성 이상
              </div>
              <div className='font-bold text-white text-center text-xl'>
                연속 최다 성공 횟수
              </div>
            </div>
            <div className='h-[33%] flex items-center justify-around flex-col'>
              <div>
                <span className='font-bold text-y4 text-[72px] text-center'>
                  {mostConsecutiveSuccess.count}
                </span>
                <span className='text-white font-regular text-sm translate-y-4 pl-1'>
                  {' '}
                  회
                </span>
              </div>
              <div>
                <span className='text-sm text-white font-regular'>
                  {`(${mostConsecutiveSuccess.firstStarforceCount}성 -> ${mostConsecutiveSuccess.lastStarforceCount}성)`}
                </span>
              </div>
            </div>
            <div className='bg-gray-600 flex flex-col w-[94%] h-[27%] rounded-[10px] justify-center translate-y-5'>
              <div className='text-white font-regular pl-5'>
                * 날짜 : {mostConsecutiveSuccess.date.toLocaleDateString()}
              </div>
              <div className='text-white font-regular pl-5'>
                * 아이템 명 : {mostConsecutiveSuccess.itemName}
              </div>
            </div>
          </div>
        </MasterCard>
        <MasterCard>
          <div className='flex flex-col w-full h-full mx-5 justify-between items-center'>
            <div className='h-[20%]'>
              <div className='font-regular text-white text-sm text-center'>
                평균 스타캐치
              </div>
              <div className='font-bold text-white text-center text-xl'>
                성공률
              </div>
            </div>
            <div className='h-[33%] flex items-center justify-center'>
              <span className='font-bold text-y4 text-[72px]'>{`${
                Math.round(
                  (totalStarcatchSuccessCount / totalStarforceCount) * 100 * 10
                ) / 10
              }`}</span>
              <span className='text-white font-regular text-sm translate-y-4 pl-1'>
                {' '}
                %
              </span>
            </div>
            <div className='h-[27%]'></div>
          </div>
        </MasterCard>
        <MasterCard>
          <div className='flex flex-col w-full h-full mx-5 justify-between items-center'>
            <div className='h-[20%]'>
              <div className='font-regular text-white text-sm text-center'>
                15성 이상
              </div>
              <div className='font-bold text-white text-center text-xl'>
                연속 최다 실패 횟수
              </div>
            </div>
            <div className='h-[33%] flex items-center justify-around flex-col'>
              <div>
                <span className='font-bold text-r2 text-[72px] text-center'>
                  {mostConsecutiveSuccess.count}
                </span>
                <span className='text-white font-regular text-sm translate-y-4 pl-1'>
                  {' '}
                  회
                </span>
              </div>
              <div>
                <span className='text-sm text-white font-regular'>
                  {`(${mostConsecutiveFailure.firstStarforceCount}성 -> ${mostConsecutiveFailure.lastStarforceCount}성)`}
                </span>
              </div>
            </div>
            <div className='bg-gray-600 flex flex-col w-[94%] h-[27%] rounded-[10px] justify-center translate-y-5'>
              <div className='text-white font-regular pl-5'>
                * 날짜 : {mostConsecutiveFailure.date.toLocaleDateString()}
              </div>
              <div className='text-white font-regular pl-5'>
                * 아이템 명 : {mostConsecutiveFailure.itemName}
              </div>
            </div>
          </div>
        </MasterCard>
        <MasterCard>
          <span className='font-bold text-white'>
            총 사용 메소량/할인으로 아낀 메소량
          </span>
        </MasterCard>
      </div>
    </div>
  );
}
