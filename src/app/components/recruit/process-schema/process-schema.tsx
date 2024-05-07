'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

import styles from './process-schema.module.css';
import useResponsive from '@Hooks/useResponsive';
import { language } from '@Types/type';

const RecruitProcessSchema = () => {
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
        src={`/images/recruit/${languageParam}-${greaterThanLarge ? 'desktop' : 'mobile'}-1.png`}
        alt={'recruit process'}
        fill
      />
    </div>
  ));
}

export default RecruitProcessSchema;