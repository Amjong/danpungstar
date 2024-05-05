'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useStarforceInfoArray } from '../context/starforceInfoContext';
import { useUserInfo } from '../context/userInfoContext';
import { useLoading } from '../context/loadingContext';
import { useContentError } from '../context/contentErrorContext';
import { useRouter } from 'next/navigation';
import {
  getRepresentativeCharacter,
  getStarForceInfoByDate,
} from '../lib/util/starforceUtility';
import ApiKeyDialog from './ApiKeyDialog';
import ApiKeyForm from './ApiKeyForm';

export default function ApiKeyInputPanel() {
  const [userInfo, setUserInfo] = useUserInfo();
  const [starforceInfoArray, setStarforceInfoArray] = useStarforceInfoArray();
  const [isLoading, setIsLoading] = useLoading();
  const [errorText, setErrorText] = useContentError();
  const router = useRouter();

  const onClickSubmit = useCallback(
    async (value) => {
      if (value === undefined || value === '') {
        alert('API Key 값을 입력해주세요!');
        return;
      }
      localStorage.setItem('apiKey', value);
      setIsLoading(true);
      setErrorText('');
      let receivedArray = [];
      try {
        receivedArray = await getStarForceInfoByDate(
          value,
          userInfo.startDate,
          userInfo.endDate
        );
      } catch (error) {
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
      }

      if (receivedArray.length === 0) {
        setErrorText(
          '설정하신 기간에 데이터가 존재하지 않습니다. 기간을 다시 설정해주세요.'
        );
        setIsLoading(false);
        return;
      }

      try {
        const characterInfo = await getRepresentativeCharacter(receivedArray);
        setUserInfo((prev) => ({
          ...prev,
          characterName: characterInfo.characterName,
          characterLevel: characterInfo.characterLevel,
          characterImage: characterInfo.characterImage,
        }));
      } catch (error) {
        console.log(error);
        // do nothing
      }

      setStarforceInfoArray(() => {
        return Array.from(receivedArray);
      });
      setIsLoading(false);
      setUserInfo((prev) => ({
        ...prev,
        finalStartDate: userInfo.startDate,
        finalEndDate: userInfo.endDate,
      }));
      router.push('/result');
    },
    [userInfo]
  );
  const onClickReset = useCallback(() => {
    // setText('');
    // localStorage.removeItem('apiKey');
  }, []);

  // useEffect(() => {
  //   if (localStorage.getItem('apiKey') === null) return;
  //   setText(localStorage.getItem('apiKey'));
  // }, []);
  return (
    <div className='mb-10 w-full h-full'>
      <ApiKeyDialog
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        errorText={errorText}
        setErrorText={setErrorText}
      />
      <ApiKeyForm onClickSubmit={onClickSubmit} onClickReset={onClickReset} />
    </div>
  );
}
