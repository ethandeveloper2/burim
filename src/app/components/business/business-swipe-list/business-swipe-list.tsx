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

  const handleHover = (idx: number) => {
    setIsHover((prev) => {
      const coypState = initailHover;
      coypState[idx] = true;

      return coypState;
    });
  }

  const handleResetHover = () => {
    setIsHover(initailHover);
  }

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
              sizes={'(max-width: 1299px) 140px, 274px'}
            />
            <div
              className={`${styles['content-container']} ${ishover[idx] ? styles.hover : ''}`}
              onTouchStart={() => handleHover(idx)}
              onMouseOver={() => handleHover(idx)}
              onMouseOut={handleResetHover}
            >
              {ishover[idx] && (
                <div
                  className={styles['icon-wrapper']}
                >
                  <Image
                    src={`${fileSrc}/icons/${key}.svg`}
                    alt={''}
                    fill
                    sizes={'(max-width: 1299px) 60px, 95px'}
                  />
                </div>
              )}
              <Bold
                classNames={[
                  'text-[14px] lg:text-[20px]',
                  'text-white',
                ]}
                align={'center'}
              >{contentObject[key]['first-line']}</Bold>
              <Medium
                classNames={[
                  'text-[12px] lg:text-[16px]',
                  'text-white',
                ]}
                align={'center'}
              >{contentObject[key]['second-line']}</Medium>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  ));
}

export default BusinessSwipeList;