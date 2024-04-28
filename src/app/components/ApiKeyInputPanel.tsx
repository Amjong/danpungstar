'use client';
import React, { useCallback, useEffect, useState } from 'react';
import StarTextArea from '../ui/StarTextArea';
import { MasterPrimaryButton } from '../ui/MasterPrimaryButton';
import { useStarforceInfoArray } from '../context/starforceInfoContext';
import { useUserInfo } from '../context/userInfoContext';
import {
  getRepresentativeCharacter,
  getStarForceInfoByDate,
} from '../lib/util/starforceUtility';
import { useLoading } from '../context/loadingContext';
import { useContentError } from '../context/contentErrorContext';
import { useRouter } from 'next/navigation';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ApiKeyGuidePanel from './ApiKeyGuidePanel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';

export default function ApiKeyInputPanel() {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const [userInfo, setUserInfo] = useUserInfo();
  const [starforceInfoArray, setStarforceInfoArray] = useStarforceInfoArray();
  const [isLoading, setIsLoading] = useLoading();
  const [errorText, setErrorText] = useContentError();
  const router = useRouter();
  const onOpenChange = (open: boolean) => {
    if (!open) setErrorText('');
  };
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
    setText('');
    localStorage.removeItem('apiKey');
  }, []);
  useEffect(() => {
    if (localStorage.getItem('apiKey') === null) return;
    setText(localStorage.getItem('apiKey'));
  }, []);
  return (
    <div className='mb-10 w-full h-full'>
      <span className='text-white font-bold text-xl'>API Key 입력 가이드 </span>
      <Dialog>
        <DialogTrigger asChild>
          <OpenInNewIcon className='cursor-pointer' color='primary' />
        </DialogTrigger>
        <DialogContent className='flex w-full overflow-y-auto h-screen bg-n1'>
          <ApiKeyGuidePanel />
        </DialogContent>
      </Dialog>
      <Dialog open={errorText !== ''} onOpenChange={onOpenChange}>
        <DialogContent className='bg-n2'>
          <div className='font-bold'>{errorText}</div>
        </DialogContent>
      </Dialog>
      <div className='flex flex-row gap-3 items-center mt-3 w-full shrink'>
        <div className='w-[70%] relative'>
          <input
            placeholder='넥슨 OPEN API 사이트에서 발급받은 API Key 값을 입력해주세요.'
            value={text}
            onChange={handleChange}
            type='password'
            className='w-full min-w-[300px] h-[46px] bg-white rounded-[10px] focus:outline-y4 text-start px-5 font-regular'
          />
          <Link
            href='https://openapi.nexon.com/'
            className='absolute bg-black text-white font-bold text-[12px] rounded-[30px] w-[22%] h-[40px] right-0 my-1 mx-1 whitespace-nowrap text-center leading-[40px]'
          >
            넥슨 OPEN API 바로가기
          </Link>
        </div>
        <div className='flex flex-row gap-3 items-center w-[15%]'>
          <MasterPrimaryButton
            text='조회'
            onClick={() => onClickSubmit(text)}
            color='r2'
          />
          <MasterPrimaryButton
            text='초기화'
            onClick={onClickReset}
            color='n2'
          />
        </div>
      </div>
    </div>
  );
}
