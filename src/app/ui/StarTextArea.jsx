import React from 'react';
import { starSrc } from '../data/image/encodedImage';
import Image from 'next/image';

export default function StarTextArea({ text }) {
  return (
    <div className='w-[145px] h-[44px]'>
      <div className='h-[28px] top-[7px] left-[50px] font-bold whitespace-nowrap leading-[normal] tracking-[0] text-xl text-y4'>
        {text}
      </div>
      <Image width={45} height={44} alt='img' src={starSrc} />
    </div>
  );
}
