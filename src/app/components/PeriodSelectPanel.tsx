'use client';
import { useCallback, useEffect, useState } from 'react';
import RadioBtns from '../ui/RadioBtns';
import 'react-datepicker/dist/react-datepicker.css';
import { useUserInfo } from '../context/userInfoContext';
import MyCalendar from './MyCalendar';
import MasterToolTip from '../ui/MasterToolTip';
import { MasterPrimaryButton } from '../ui/MasterPrimaryButton';

export default function PeriodSelectPanel() {
  const [isPeriod, setIsPeriod] = useState(false);
  const [startDate, setStartDate] = useState(new Date('2023-12-27'));
  const [endDate, setEndDate] = useState(new Date());
  const [userInfo, setUserInfo] = useUserInfo();
  const onSelect = useCallback((value) => {
    if (value === 'all') {
      setIsPeriod(false);
      setStartDate(new Date('2023-12-27'));
      setEndDate(new Date());
    } else if (value === 'partial') {
      setIsPeriod(true);
    } else {
      console.log('error');
    }
  }, []);

  const onSubmit = useCallback(() => {
    setUserInfo((prev) => ({
      ...prev,
      startDate: startDate,
      endDate: endDate,
    }));
  }, [setUserInfo, startDate, endDate]);

  useEffect(() => {
    setUserInfo((prev) => ({
      ...prev,
      startDate: new Date('2023-12-27'),
      endDate: new Date(),
    }));
  }, []);

  const onChangeEnd = useCallback(
    (date) => {
      if (date < startDate) {
        setStartDate(date);
      }
      setEndDate(date);
    },
    [startDate]
  );

  return (
    <div>
      <div className='flex flex-row translate-x-[11px] pt-5 flex-wrap items-center'>
        <div className='min-x-[182px]'>
          <RadioBtns onSelect={onSelect} />
        </div>
        {isPeriod && (
          <div className='flex'>
            <div className='w-[39%]'>
              <MyCalendar
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
                minDate={new Date('2023-12-27')}
                maxDate={undefined}
                placeholderText='시작일'
              />
            </div>
            <div className='w-[39%] ml-7'>
              <MyCalendar
                selected={endDate}
                onChange={onChangeEnd}
                minDate={new Date('2023-12-27')}
                maxDate={new Date(startDate).setFullYear(
                  startDate.getFullYear() + 1
                )}
                placeholderText='종료일'
              />
            </div>
            <div className='w-[15%] ml-10 scale-[0.95]'>
              <MasterPrimaryButton
                text='조회'
                onClick={onSubmit}
                color='r2'
                type={undefined}
              />
            </div>
          </div>
        )}
      </div>
      <MasterToolTip
        text='2023-12-27 이후의 데이터만 조회 가능합니다'
        placement='right-end'
      />
    </div>
  );
}
