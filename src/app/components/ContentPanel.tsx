'use client';
import { useState } from 'react';
import UsedMesoPanel from './UsedMesoPanel';
import SuccessRatePanel from './SuccessRatePanel';
import HistoryPanel from './HistoryPanel';
import TapBtns from '../ui/TapBtns';
import { useStarforceHistoryArray } from '../context/starforceContext';
import Link from 'next/link';
import { useLoading } from '../context/loadingContext';
import { useContentError } from '../context/contentErrorContext';

const contentArray = [
  {
    text: '소모 메소량',
    component: <UsedMesoPanel />,
  },
  {
    text: '강화 성공률',
    component: <SuccessRatePanel />,
  },
  {
    text: '히스토리',
    component: <HistoryPanel />,
  },
];

export default function ContentPanel() {
  const [menu, setMenu] = useState(0);
  const [starforceHistoryArray] = useStarforceHistoryArray();
  const [isLoading] = useLoading();
  const [errorText] = useContentError();
  const handleChange = (value) => {
    setMenu(value);
  };
  return (
    <div className='w-full h-full overflow-auto'>
      <TapBtns onChanged={handleChange} tabBtnsArray={contentArray} />
      <div className='mt-10'>
        {errorText !== '' && (
          <div className='mt-20 font-bold text-white text-center text-xl'>
            {errorText}
          </div>
        )}
        {errorText === '' && menu === 2 && contentArray[menu].component}
        {errorText === '' &&
          menu !== 2 &&
          !isLoading &&
          starforceHistoryArray.length === 0 && (
            <div className='text-xl font-bold text-center text-white mt-20'>
              API KEY 값을 입력 해주세요.
              <Link
                href='/guide'
                className='text-r2 underline underline-offset-4'
              >
                API KEY 값 입력 가이드
              </Link>{' '}
              보러가기
              <div className='font-regular'>(약 1 ~ 2분 소요)</div>
            </div>
          )}
        {menu !== 2 && starforceHistoryArray.length !== 0 && (
          <div className='overflow-auto'>{contentArray[menu].component}</div>
        )}
      </div>
    </div>
  );
}
