'use client'

import { useState, useEffect, useRef, CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import lottie from 'lottie-web';

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
import CountUpTypo from '@Components/count-up-typo/count-up/count-up';
import { useInterval } from '@/app/hooks/useInterval';

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
    // 플레이어 생성
    new window.YT.Player('player', {
      videoId: '_SYFkhPq5A8',
      host: 'https://www.youtube-nocookie.com',
      playerVars: {
        autoplay: 1, // 자동 재생
        mute: 1, // 음소거
        loop: 1, // 반복재생
        playlist: '_SYFkhPq5A8', // 반복재생시 다음 영상
        controls: 0, // 컨트롤 숨김
        rel: 0, // 관련 동영상 표시 안 함
        modestbranding: 1, // 유투브 로고 제거
        disablekb: 1, //키보드 컨트롤 비활성,
        origin: window.location.host,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
      }
    });
  });

  const onPlayerReady = (event: any) => {
    event.target.mute();
    event.target.playVideo();
  }

  const onPlayerStateChange = (event: any) => {
    // 반복재생
    if (event.data == window.YT.PlayerState.ENDED) {
      event.target.playVideo();
    }
  }

  return (mounted && (
    <div
      className={styles.container}
    >
      <section
        className={styles.header}
      >
        <div
          id={'player'}
          className={styles.video}
        />
        {/* 영상 버튼 비활성을 위한 레이어  */}
        <div
          className={styles['video-layer']}
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
              {summaryKeys.map((key) => {
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
                        end={Number(t(`body1.summary.description.${key}.highlight`).replace(/\D+/g, ''))}
                        classNames={[
                          'text-[28px] lg:text-[59px]',
                        ]}
                      />
                      <Bold
                        classNames={[
                          'text-[16px] lg:text-[32px]',
                        ]}
                      >{t(`body1.summary.description.${key}.highlight-suffix`)}</Bold>
                    </div>
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