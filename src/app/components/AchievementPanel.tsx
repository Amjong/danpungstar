import MasterCard from '../ui/MasterCard';
import PeriodSelectPanel from './PeriodSelectPanel';

export default function AchievementPanel() {
  return (
    <div className='flex flex-col'>
      <div className='text-white font-regular text-[12px] ml-3'>
        * 스타포스 정보는 최대 5분 후 반영됩니다.
        <br />* 2023년 12월 27일 이후의 데이터만 조회 가능합니다.
      </div>
      <PeriodSelectPanel />
      <div className='grid grid-cols-2 gap-8 px-20 my-20'>
        <MasterCard className='col-span-2'>
          <span className='font-bold text-white'>
            총 사용 메소량/할인으로 아낀 메소량
          </span>
        </MasterCard>
        <MasterCard>
          <span className='font-regular text-white text-sm'>15성 이상</span>
          <span className='font-bold text-white'>연속 최다 성공 횟수</span>
        </MasterCard>
        <MasterCard>
          <span className='font-regular text-white text-sm'>평균 스타캐치</span>
          <span className='font-bold text-white'>성공률</span>
        </MasterCard>
        <MasterCard>
          <span className='font-regular text-white text-sm'>15성 이상</span>
          <span className='font-bold text-white'>연속 최다 실패 횟수</span>
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
