import React from 'react';
import { starSrc } from '../data/image/encodedImage';
import Image from 'next/image';

export default function StarTextArea({ text }) {
  return (
    <div className='flex items-center'>
      <Image width={45} height={44} alt='img' src={starSrc} />
      <div className='h-[28px] font-bold whitespace-nowrap leading-[normal] tracking-[0] text-xl text-y4'>
        {text}
      </div>
    </div>
  );
}
