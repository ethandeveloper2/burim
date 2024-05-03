'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import styles from './fft-schema.module.css';
import useResponsive from '@Hooks/useResponsive';
import { language } from '@Types/type';

const FftSchema = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { greaterThanLarge } = useResponsive();
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <div
      className={styles.container}
    >
      <Image
        className={styles['img-1']}
        src={`/images/company/fft/${languageParam}-${greaterThanLarge ? 'desktop' : 'mobile'}-1.png`}
        alt={'타사 사례'}
        width={1140}
        height={46}
      />
      <Image
        className={styles['img-2']}
        src={`/images/company/fft/${languageParam}-${greaterThanLarge ? 'desktop' : 'mobile'}-2.png`}
        alt={'부림 솔루션 소개'}
        width={1140}
        height={818}
      />
    </div>
  ));
}

export default FftSchema;