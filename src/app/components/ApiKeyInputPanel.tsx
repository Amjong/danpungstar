'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useStarforceHistoryArray } from '../context/starforceContext';
import { useUserInfo } from '../context/userInfoContext';
import { useLoading } from '../context/loadingContext';
import { useContentError } from '../context/contentErrorContext';
import { useRouter } from 'next/navigation';
import { getStarForceInfo } from '../lib/util/starforceUtility';
import ApiKeyDialog from './ApiKeyDialog';
import ApiKeyForm from './ApiKeyForm';
import StarTextArea from '../ui/StarTextArea';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import { starforceHistory } from '../types/starforce';

export default function ApiKeyInputPanel() {
  const [userInfo, setUserInfo] = useUserInfo();
  const [starforceHistoryArray, setStarforceHistoryArray] =
    useStarforceHistoryArray();
  const [isLoading, setIsLoading] = useLoading();
  const [errorText, setErrorText] = useContentError();
  const router = useRouter();
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  const getStarForceInfoByDate = async (
    apiKey,
    startDateString,
    endDateString
  ) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    if (startDate > endDate) {
      alert('시작 날짜는 종료 날짜보다 빠를 수 없습니다. 다시 시도해주세요!');
      return;
    }
    const totalCount =
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;
    let doneCount = 0;

    setProgress((prev) => ({ ...prev, total: totalCount }));
    const starforceHistoryArray: starforceHistory[] = [];

    // TODO : change logic (push promise to array and use for await loop)
    while (startDate <= endDate) {
      const currentDateStarforceHistory = await getStarForceInfo(
        apiKey,
        startDate.toISOString().slice(0, 10)
      );
      starforceHistoryArray.push(currentDateStarforceHistory);
      doneCount++;
      setProgress((prev) => ({ ...prev, current: doneCount }));
      if (!isLoading || errorText !== '') {
        setProgress(() => ({ current: 0, total: 0 }));
        console.log(isLoading, errorText);
        return undefined;
      }
      startDate.setDate(startDate.getDate() + 1);
    }

    return starforceHistoryArray;
  };

  const onClickSubmit = async (value) => {
    if (value === undefined || value === '') {
      alert('API Key 값을 입력해주세요!');
      return;
    }
    localStorage.setItem('apiKey', value);
    setUserInfo((prev) => ({ ...prev, apiKey: value }));
    setIsLoading(true);
    setErrorText('');
  };

  const onClickReset = useCallback(() => {
    // setText('');
    // localStorage.removeItem('apiKey');
  }, []);

  // useEffect(() => {
  //   if (localStorage.getItem('apiKey') === null) return;
  //   setText(localStorage.getItem('apiKey'));
  // }, []);
  useEffect(() => {
    if (!isLoading) return;

    getStarForceInfoByDate(userInfo.apiKey, new Date('2023-12-27'), new Date())
      .then((result) => {
        if (!result) return;
        if (result.length === 0) {
          setErrorText(
            '설정하신 기간에 데이터가 존재하지 않습니다. 기간을 다시 설정해주세요.'
          );
          setIsLoading(false);
          return;
        }
        setStarforceHistoryArray(() => {
          return Array.from(result as any[]);
        });
        setUserInfo((prev) => ({
          ...prev,
          startDate: new Date('2023-12-27'),
          endDate: new Date(),
        }));
        setIsLoading(false);
        router.push('/result');
      })
      .catch((error) => {
        if (error.message === '429') {
          setErrorText(
            '하루 검색 제한량이 초과되었습니다. API KEY 타입을 서비스 단계로 등록하고 다시 시도해주세요.'
          );
          setIsLoading(false);
          return;
        } else if (error.message === '400' || error.message === '403') {
          setErrorText('API KEY 값이 올바른지 확인 후 다시 시도해주세요.');
          setIsLoading(false);
          return;
        } else if (error.message === '500') {
          setErrorText(
            'Nexon API 서버에 오류가 발생했습니다. 나중에 다시 시도해주세요.'
          );
          setIsLoading(false);
          return;
        }
      });
  }, [isLoading, errorText]);
  return (
    <div className='mb-10 w-full h-full'>
      <ApiKeyDialog
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        errorText={errorText}
        setErrorText={setErrorText}
        LoadingProgress={progress}
      />
      <div className='flex items-center'>
        <StarTextArea text='API KEY 입력' />
        <Link href='/guide'>
          <span className='underline underline-offset-2 font-regular text-white text-sm ml-4 mr-1'>
            발급 가이드 바로가기
          </span>
        </Link>
        <button onClick={() => router.push('./guide')}>
          <OpenInNewIcon fontSize='small' color='secondary' />
        </button>
      </div>
      <ApiKeyForm onClickSubmit={onClickSubmit} onClickReset={onClickReset} />
    </div>
  );
}
