import PeriodSelectPanel from './PeriodSelectPanel';

export default function AchievementPanel() {
  return (
    <div className='flex flex-col'>
      <div className='text-white font-regular text-[12px] ml-3'>
        * 스타포스 정보는 최대 5분 후 반영됩니다.
        <br />* 2023년 12월 27일 이후의 데이터만 조회 가능합니다.
      </div>
      <PeriodSelectPanel />
    </div>
  );
}
