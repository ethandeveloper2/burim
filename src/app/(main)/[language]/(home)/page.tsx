'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';
import { language } from '@Types/type'
import useTranslate from '@Hooks/useTranslate';
import useResponsive from '@Hooks/useResponsive';
import burimTypoImage from '@Public/images/main/burim.png';
import arrowIcon from '@Public/icons/arrow/right-white.svg';
import ContactUsPage from '@/app/(main)/[language]/contact/page';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import Regular from '@Components/common/typo/regular/regular';
import RoundButton from '@Components/common/buttons/round-button/round-button';
import LinkCollection from '@Components/main/link-collection/link-collection';

const LanguageHome = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('home', params.language);
  const { greaterThanLarge } = useResponsive();

  const [mounted, setMounted] = useState(false);

  const summaryObj = JSON.parse(t('body1.summary.description'));
  const summaryKeys = Object.keys(summaryObj).sort((a: string,b: string) => Number(a.at(-1)) - Number(b.at(-1)));

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
        {greaterThanLarge ? (
          <Image
            className={styles['destop-map']}
            src={`/images/main/map-desktop.png`}
            alt={''}
            fill
          />
        ) : (
          <Image
            className={styles['mobile-map']}
            src={`/images/main/map-mobile.png`}
            alt={''}
            fill
          />
        )}

        <div
          className={styles['body1-contents']}
        >
          <div
            className={styles.upward}
          >
            <Medium
              classNames={[
                'text-[16px] lg:text-[24px]',
                'text-green-1',
              ]}
            >{t('body1.title.sub')}</Medium>
            <Bold
              classNames={[
                'text-[32px] lg:text-[40px]',
              ]}
            >{t('body1.title.main')}</Bold>
            <Regular
              classNames={[
                'text-[14px] lg:text-[20px]',
                styles.description,
              ]}
            >{t('body1.description')}</Regular>

            <Link
              className={styles.link}
              href={`/${params.language}/company/history`}
            >
              <RoundButton
                bgColor={'green'}
                px={32}
                py={16}
              >
                <div
                  className={styles.row}
                >
                  <Regular
                    classNames={[
                      'text-[14px] lg:text-[20px]',
                      'text-white',
                    ]}
                    mr={20}
                  >{t('body1.btn')}</Regular>
                  <Image
                    src={arrowIcon}
                    alt={''}
                    width={16}
                    height={16}
                  />
                </div>
              </RoundButton>
            </Link>
          </div>
          <div
            className={styles.downward}
          >
            <Bold
              classNames={[
                'text-[20px] lg:text-[32px]',
              ]}
              mb={8}
            >{t('body1.summary.title')}</Bold>
            <ul
              className={styles['summary-ul']}
            >
              {summaryKeys.map((key, idx) => {
                return (
                  <li
                    className={styles['summary-li']}
                  >
                    <li
                      className={styles['summary-first-line']}
                    >
                      <Bold
                        classNames={[
                          'text-[28px] lg:text-[59px]',
                        ]}
                      >{t(`body1.summary.description.${key}.highlight`)}</Bold>
                      <Bold
                        classNames={[
                          'text-[16px] lg:text-[32px]',
                        ]}
                      >{t(`body1.summary.description.${key}.highlight-suffix`)}</Bold>
                    </li>
                    <Regular
                      classNames={[
                        'text-[16px] lg:text-[20px]',
                      ]}
                      align={'center'}
                    >{t(`body1.summary.description.${key}.explan`)}</Regular>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <section
        className={styles.body2}
      >
        <LinkCollection />
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