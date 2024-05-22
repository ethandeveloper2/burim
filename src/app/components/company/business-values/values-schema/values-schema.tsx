'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

import styles from './values-schema.module.css';
import useResponsive from '@Hooks/useResponsive';
import useTranslate from '@Hooks/useTranslate';
import { language } from '@Types/type';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';

const BurimValuesSchema = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate('company.business-values', languageParam);
  const { greaterThanLarge } = useResponsive();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <div
      className={styles.container}
    >
      <div
        className={styles.header}
      >
        <Bold
          classNames={[
            'text-[24px] lg:text-[32px]',
          ]}
          align={'center'}
          mb={greaterThanLarge ? 32 : 8}
        >{t('body.title')}</Bold>
        <Medium
          classNames={[
            'text-[16px] lg:text-[20px]',
          ]}
          align={'center'}
          mb={greaterThanLarge ? 50 : 42}
        >{t('body.description')}</Medium>
        <div
          className={styles['schema-wrapper']}
        >
          <Image
            className={styles.schema}
            src={`/images/company/values/${greaterThanLarge ? 'desktop' : 'mobile'}-1.png`}
            alt={''}
            width={1140}
            height={417}
          />
        </div>
      </div>
    </div>
  ));
}

export default BurimValuesSchema;