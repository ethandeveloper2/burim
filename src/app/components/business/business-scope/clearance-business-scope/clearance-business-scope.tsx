'use client'

import { useState, useEffect, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';

import styles from './clearance-business-scope.module.css';
import useResponsive from '@/app/hooks/useResponsive';
import BusinessSwipeList from '../../business-swipe-list/business-swipe-list';
import Bold from '@/app/components/common/typo/bold/bold';
import BusinessAccordion from '../../accordion/accordion';
import Medium from '@/app/components/common/typo/medium/medium';

const swiperContents = {
  food : {
    
  }
}

const ClearanceBusinessScope = () => {
  const { greaterThanLarge } = useResponsive();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <ul
      className={styles.container}
    >
      <BusinessAccordion
        number={1}
        title={'식품'}
      >
        <BusinessSwipeList
          contents={[1,1,1,1,1,1]}
        />
      </BusinessAccordion>
      <BusinessAccordion
        number={1}
        title={'식품'}
      >
        <BusinessSwipeList
          contents={[1,1,1,1]}
        />
      </BusinessAccordion>
    </ul>
  ));
}

export default ClearanceBusinessScope;