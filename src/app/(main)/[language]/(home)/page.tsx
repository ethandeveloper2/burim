'use client'

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';
import { language } from '@Types/type';
import burimTypoImage from '@Public/images/main/burim.png';
import ContactUsPage from '@/app/(main)/[language]/contact/page';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import Regular from '@Components/common/typo/regular/regular';
// import LinkCollection from '@Components/main/link-collection/link-collection';

const LanguageHome = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <div
      className={styles.container}
    >
      <section
        className={styles.header}
      >
        <video
          className={styles.video}
          src={'/videos/11856385-uhd_2160_3840_25fps-2.mp4'}
          poster={'/images/main/001.png'}
          autoPlay
          loop
          muted
        >{
          // 비디오 동작 로딩 실패 메세지
          ''
        }</video>

        <div
          className={styles['header-contents']}
        >
          <Bold
            classNames={[
              'text-[16px] lg:text-[36px]',
              'text-white',
            ]}
            align={'center'}
          >{'FFT 수,출입 솔루션을 제공하는 부림교역'}</Bold>

          <div
            className={styles['second-row']}
          >
            <Bold
              classNames={[
                'text-[34px] lg:text-[68px]',
                'text-white',
                styles['second-row-left'],
              ]}
            >{'The future with'}</Bold>
            <div
              className={styles['second-row-right']}
            >
              <Image
                className={styles['brim-typo']}
                src={burimTypoImage}
                alt={''}
                width={282}
                height={86}
              />
              <Bold
                classNames={[
                  'text-[34px] lg:text-[68px]',
                  'text-white',
                ]}
              >{'trade'}</Bold>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.body1}
      >
        {/* 설명 */}
      </section>

      <section
        className={styles.body2}
      >
        {/* <LinkCollection /> */}
      </section>

      <section
        className={styles.footer}
      >
        <ContactUsPage />
      </section>
    </div>
  ));
}

export default LanguageHome;