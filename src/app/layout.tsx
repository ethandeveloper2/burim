import type { Metadata } from 'next';

import './globals.css';
import Header from '@Components/header/header/header';
import Footer from '@Components/footer/footer';

export const metadata: Metadata = {
  title: '부림교역',
  description: '',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      <head>
        {/* 링크, 스크립트 관련 선언부 */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;