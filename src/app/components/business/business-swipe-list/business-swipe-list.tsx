'use client'

import { useState, useEffect, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';

import styles from './business-swipe-list.module.css';
import useResponsive from '@/app/hooks/useResponsive';
import Bold from '@/app/components/common/typo/bold/bold';
import Medium from '@/app/components/common/typo/medium/medium';

const BusinessSwipeList = ({
  contents
} : {
  contents: any[];
}) => {
  const initailHover = new Array(contents.length).fill(false);

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
      {contents.map((el, idx) => {
        return (
          <SwiperSlide
            className={styles.slide}
            key={`slider ${idx}`}
          >
            <Image
              className={styles.image}
              src={`${'/images/business/clearance/food'}/${idx+1}.png`}
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
                    src={`${'/images/business/clearance/food'}/icons/${idx+1}.svg`}
                    alt={''}
                    fill
                  />
                </div>
              )}
              <Bold
                classNames={[
                  'text-[16px] lg:text-[36px]',
                  'text-white',
                ]}
              >가공 식품</Bold>
              <Medium
                classNames={[
                  'text-[12px] lg:text-[24px]',
                  'text-white',
                ]}
              >(유가공 포함)</Medium>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  ));
}

export default BusinessSwipeList;