'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { getItemEquipmentInfo, printItems } from '../lib/util/starforceUtility';

export default function Page() {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    console.log('조회 클릭', text);
    getItemEquipmentInfo(text);
    setText('');
  };
  return (
    <div className='mt-10 mb-10 border-red-50'>
      <Input
        value={text}
        onChange={handleChange}
        className='font-regular text-black'
        placeholder='캐릭터 이름을 입력해주세요.'
        type='text'
      ></Input>
      <Button onClick={handleClick}>조회</Button>
      <Button onClick={() => setText('')}>초기화</Button>
      <Button onClick={() => printItems()}>출력</Button>
    </div>
  );
}
