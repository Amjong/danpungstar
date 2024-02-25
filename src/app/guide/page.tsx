'use client';
import { useState } from 'react';
import ApiKeyGuidePanel from '../components/ApiKeyGuidePanel';
import QnaPanel from '../components/QnaPanel';
import TabBtns from '../ui/TapBtns';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const tabBtnsArray = [
  {
    text: 'API KEY 발급',
    component: <ApiKeyGuidePanel />,
  },
  {
    text: 'Q&A',
    component: <QnaPanel />,
  },
];

export default function Page() {
  const [menu, setMenu] = useState(0);
  const handleChange = (value) => {
    setMenu(value);
  };
  return (
    <div className='flex flex-col bg-n1 px-10'>
      <div className='mt-5'>
        <TabBtns onChanged={handleChange} tabBtnsArray={tabBtnsArray} />
      </div>
      <div className='mt-5 text-white'>
        <span className='font-bold'>
          개발자 메일
          <br />
        </span>
        <span className='font-regular text-[12px]'>
          서비스 관련 궁금증, 건의사항이 생기면 언제든지 연락해주세요! <br />
          <br />
        </span>
        <MailOutlineIcon />{' '}
        <span className='underline text-lg leading-loose'>
          danpungtokki@gmail.com
        </span>
        <span></span>
      </div>

      <div className='mt-10 mb-10 bg-n2 rounded-lg'>
        {tabBtnsArray[menu].component}
      </div>
    </div>
  );
}
