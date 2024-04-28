'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [menu, setMenu] = useState(0);
  return (
    <header className='flex w-full bg-n1 items-center z-10 h-[45px]'>
      <div className='ml-10 flex h-full mt-2'>
        <Link href='/' className='z-50 items-center justify-center'>
          <Image
            src='https://res.cloudinary.com/dazzvmx3y/image/upload/v1707321384/yod18wgalszlirkkjzvn.png'
            width={129}
            height={40}
            alt='logo'
          />
        </Link>
      </div>
      <div className='flex w-full justify-end gap-[36px] px-10 relative translate-x-[-50px] py-[15px]'>
        <div
          className={`font-regular ${
            menu === 0 ? 'text-y4 font-extrabold' : 'text-white font-medium'
          } relative w-fit mt-[-1.00px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}
        >
          <Link href='/' className='text-xl' onClick={() => setMenu(0)}>
            홈
          </Link>
        </div>
        <div
          className={`font-regular ${
            menu === 1 ? 'text-y4 font-extrabold' : 'text-white font-medium'
          } relative w-fit mt-[-1.00px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}
        >
          <Link href='/result' className='text-xl' onClick={() => setMenu(1)}>
            스타포스
          </Link>
        </div>
      </div>
    </header>
  );
}
