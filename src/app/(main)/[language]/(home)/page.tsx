'use client'

import { useState, useEffect, useRef, CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import lottie from 'lottie-web';
import 'youtube-background';

import styles from './page.module.css';
import { language } from '@Types/type'
import useTranslate from '@Hooks/useTranslate';
import useResponsive from '@Hooks/useResponsive';
import { useInterval } from '@Hooks/useInterval';
import burimTypoImage from '@Public/images/main/burim.png';
import arrowIcon from '@Public/icons/arrow/right-white.svg';
import ContactUsPage from '@/app/(main)/[language]/contact/page';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import Regular from '@Components/common/typo/regular/regular';
import RoundButton from '@Components/common/buttons/round-button/round-button';
import LinkCollection from '@Components/main/link-collection/link-collection';
import CountUpTypo from '@Components/count-up-typo/count-up/count-up';

const LanguageHome = ({ params }: {
  params: {
    language: language;
  }
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  const { t } = useTranslate('home', params.language);
  const { greaterThanLarge } = useResponsive();

  const [mounted, setMounted] = useState(false);
  const [firstHeaderTextOpacity, setFirstHeaderTextOpacity] = useState<number>(0);
  const [firstHeaderTextTop, setFirstHeaderTextTop] = useState<number>(30);
  const [secondLeftHeaderTextOpacity, setSecondLeftHeaderTextOpacity] = useState<number>(0);
  const [secondLeftHeaderTextTop, setSecondLeftHeaderTextTop] = useState<number>(30);
  const [secondRightHeaderTextOpacity, setSecondRightHeaderTextOpacity] = useState<number>(0);
  const [secondRightHeaderTextTop, setSecondRightHeaderTextTop] = useState<number>(30);
  const [headerTextTimer, setHeaderTextTimer] = useState<number | null>(null);

  const summaryObj = JSON.parse(t('body1.summary.description'));
  const summaryKeys = Object.keys(summaryObj).sort((a: string, b: string) => Number(a.at(-1)) - Number(b.at(-1)));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setHeaderTextTimer(300);
    }
  }, [mounted]);

  useInterval(() => {
    if (!firstHeaderTextOpacity) {
      setFirstHeaderTextOpacity(1);
      setFirstHeaderTextTop(0);
    } else if (!secondLeftHeaderTextOpacity) {
      setSecondLeftHeaderTextOpacity(1);
      setSecondLeftHeaderTextTop(0);
    } else if (!secondRightHeaderTextOpacity) {
      setSecondRightHeaderTextOpacity(1);
      setSecondRightHeaderTextTop(0);
      setHeaderTextTimer(null);
    }
  }, headerTextTimer);

  useEffect(() => {
    if (mapContainer.current) {
      lottie.loadAnimation({
        container: mapContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `/images/main/lottie.json`,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      });
    }
  });

  useEffect(() => {
    if (window.VideoBackgrounds) {
      new window.VideoBackgrounds('[data-vbg]');
    }
  }, [mounted]);

  return (mounted && (
    <div
      className={styles.container}
    >
      <section
        className={styles.header}
      >
        <div
          className={styles.video}
          data-vbg={'videos/11856385-uhd_2160_3840_25fps-2.mp4'}
        />

        <div
          className={styles['header-contents']}
          style={{
            '--first-opacity': firstHeaderTextOpacity,
            '--first-top': `${firstHeaderTextTop}px`,
            '--second-left-opacity': secondLeftHeaderTextOpacity,
            '--second-left-top': `${secondLeftHeaderTextTop}px`,
            '--second-right-opacity': secondRightHeaderTextOpacity,
            '--second-right-top': `${secondRightHeaderTextTop}px`,
          } as CSSProperties | Record<string, any>}
        >
          <Bold
            classNames={[
              'text-[16px] lg:text-[36px]',
              'text-white',
              styles['first-row']
            ]}
            align={'center'}
          >{t('header')}</Bold>

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
          <div
            ref={mapContainer}
            className={styles['destop-map']}
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
                'text-[16px] lg:text-[20px]',
                'text-green-1',
              ]}
            >{t('body1.title.sub')}</Medium>
            <Bold
              classNames={[
                'text-[32px] lg:text-[38px]',
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
                px={greaterThanLarge ? 24 : 16}
                py={greaterThanLarge ? 15 : 9}
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
                'text-[20px] lg:text-[28px]',
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
                    key={`summary_${key}`}
                  >
                    <div
                      className={styles['summary-first-line']}
                    >
                      <CountUpTypo
                        typoType={'bold'}
                        duration={idx+1}
                        end={Number(t(`body1.summary.description.${key}.highlight`).replace(/\D+/g, ''))}
                        classNames={[
                          'text-[20px] lg:text-[48px]',
                          styles.count,
                        ]}
                      />
                      <Bold
                        classNames={[
                          'text-[12px] lg:text-[30px]',
                        ]}
                      >{t(`body1.summary.description.${key}.highlight-suffix`)}</Bold>
                    </div>
                    <Regular
                      classNames={[
                        'text-[12px] lg:text-[18px]',
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