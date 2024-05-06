'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useStarforceInfoArray } from '../context/starforceInfoContext';
import { useUserInfo } from '../context/userInfoContext';
import { useLoading } from '../context/loadingContext';
import { useContentError } from '../context/contentErrorContext';
import { useRouter } from 'next/navigation';
import {
  getRepresentativeCharacter,
  getStarForceInfo,
} from '../lib/util/starforceUtility';
import ApiKeyDialog from './ApiKeyDialog';
import ApiKeyForm from './ApiKeyForm';

export default function ApiKeyInputPanel() {
  const [userInfo, setUserInfo] = useUserInfo();
  const [starforceInfoArray, setStarforceInfoArray] = useStarforceInfoArray();
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

    let dateArray: Promise<any[]>[] = [];

    setProgress((prev) => ({ ...prev, total: totalCount }));
    const starforceHistoryArray: any[] = [];

    console.log(totalCount, apiKey);

    while (startDate <= endDate) {
      dateArray.push(
        getStarForceInfo(apiKey, startDate.toISOString().slice(0, 10))
      );
      startDate.setDate(startDate.getDate() + 1);
      // if (!isLoading || errorText !== '') {
      //   setProgress(() => ({ current: 0, total: 0 }));
      //   console.log(isLoading, errorText);
      //   return undefined;
      // }
      // const currentDateArray = await getStarForceInfo(
      //   apiKey,
      //   startDate.toISOString().slice(0, 10)
      // );
      // starforceHistoryArray = starforceHistoryArray.concat(currentDateArray);
      // // TODO : exception handling
      // startDate.setDate(startDate.getDate() + 1);
      // doneCount++;
      // console.log(doneCount);
      // setProgress((prev) => ({ ...prev, current: doneCount }));
    }

    console.log(dateArray);

    for (const promise of dateArray) {
      const currentDateArray = await promise;
      starforceHistoryArray.push(...currentDateArray);
      doneCount++;
      setProgress((prev) => ({ ...prev, current: doneCount }));
      if (!isLoading || errorText !== '') {
        setProgress(() => ({ current: 0, total: 0 }));
        console.log(isLoading, errorText);
        return undefined;
      }
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

    getStarForceInfoByDate(
      userInfo.apiKey,
      userInfo.startDate,
      userInfo.endDate
    )
      .then((result) => {
        if (!result) return;
        if (result.length === 0) {
          setErrorText(
            '설정하신 기간에 데이터가 존재하지 않습니다. 기간을 다시 설정해주세요.'
          );
          setIsLoading(false);
          return;
        }
        setStarforceInfoArray(() => {
          return Array.from(result as any[]);
        });
        setIsLoading(false);
        setUserInfo((prev) => ({
          ...prev,
          finalStartDate: userInfo.startDate,
          finalEndDate: userInfo.endDate,
        }));
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
    // try {
    //   const characterInfo = await getRepresentativeCharacter(receivedArray);
    //   setUserInfo((prev) => ({
    //     ...prev,
    //     characterName: characterInfo.characterName,
    //     characterLevel: characterInfo.characterLevel,
    //     characterImage: characterInfo.characterImage,
    //   }));
    // } catch (error) {
    //   console.log(error);
    //   // do nothing
    // }
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
      <ApiKeyForm onClickSubmit={onClickSubmit} onClickReset={onClickReset} />
    </div>
  );
}
