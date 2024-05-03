import { useState, useEffect, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';

import styles from './business-swipe-list.module.css';
import useResponsive from '@Hooks/useResponsive';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';

const BusinessSwipeList = ({
  contentObject,
  fileSrc,
} : {
  contentObject: {[key: string]: any};
  fileSrc: string;
}) => {
  const contentsKeys = Object.keys(contentObject);
  const initailHover = new Array(contentsKeys.length).fill(false);

  const { greaterThanLarge } = useResponsive();

  const [mounted, setMounted] = useState(false);
  const [ishover, setIsHover] = useState(initailHover);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <Swiper
      className={styles.container}
      spaceBetween={greaterThanLarge? 16 : 8}
      slidesPerView={'auto'}
    >
      {contentsKeys.map((key: string, idx: number) => {
        return (
          <SwiperSlide
            className={styles.slide}
            key={`slider_${key}_${idx}`}
          >
            <Image
              className={styles.image}
              src={`${fileSrc}/${key}.png`}
              alt={''}
              fill
            />
            <div
              className={styles['content-container']}
              onMouseOver={() => {
                setIsHover((prev) => {
                  const coypState = initailHover;
                  coypState[idx] = true;

                  return coypState;
                });
              }}
              onMouseOut={() => {
                setIsHover(initailHover);
              }}
            >
              {ishover[idx] && (
                <div
                  className={styles['icon-wrapper']}
                >
                  <Image
                    src={`${fileSrc}/icons/${key}.svg`}
                    alt={''}
                    fill
                  />
                </div>
              )}
              <Bold
                classNames={[
                  'text-[16px] lg:text-[35px]',
                  'text-white',
                ]}
              >{contentObject[key]['first-line']}</Bold>
              <Medium
                classNames={[
                  'text-[12px] lg:text-[24px]',
                  'text-white',
                ]}
              >{contentObject[key]['second-line'] || ' '}</Medium>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  ));
}

export default BusinessSwipeList;