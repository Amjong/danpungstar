'use client';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Footer from './components/Footer';
import { StarforceProvider } from './context/starforceInfoContext';
import { UserInfoProvider } from './context/userInfoContext';
import { LoadingProvider } from './context/loadingContext';
import { ContentErrorProvider } from './context/contentErrorContext';
import UpBtn from './ui/UpBtn';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

// TODO: 메타데이터 추가
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

// Font files can be colocated inside of `app`
const nexonBoldFont = localFont({
  src: '../../public/fonts/NEXON Lv1 Gothic OTF Bold.woff',
  display: 'swap',
  variable: '--font-NexonGothicBold',
});

const nexonRegularFont = localFont({
  src: '../../public/fonts/NEXON Lv1 Gothic OTF.woff',
  display: 'swap',
  variable: '--font-NexonGothicRegular',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <html
      lang='en'
      className={`${nexonBoldFont.variable} ${nexonRegularFont.variable}`}
    >
      <body>
        <div className='leading-loose overflow-hidden max-w-screen-2xl bg-gradient-to-b from-[#1A191B] from-0% via-[#202441] via-50% to-[#2F2948] to-100%'>
          <StarforceProvider>
            <UserInfoProvider>
              <LoadingProvider>
                <ContentErrorProvider>
                  <Navbar />
                  <main>{children}</main>
                  <Footer />
                </ContentErrorProvider>
              </LoadingProvider>
            </UserInfoProvider>
          </StarforceProvider>
          {isVisible && (
            <div
              className='fixed bottom-[100px] right-[35px]'
              onClick={scrollToTop}
            >
              <UpBtn />
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
