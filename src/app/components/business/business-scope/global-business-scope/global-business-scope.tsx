'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import 'swiper/css';

import styles from './global-business-scope.module.css';
import BusinessSwipeList from '@Components/business/business-swipe-list/business-swipe-list';
import BusinessAccordion from '@Components/business/accordion/accordion';
import useTranslate from '@Hooks/useTranslate';
import { language } from '@Types/type';

const GlobalBusinessScope = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate('business.global-markets', languageParam);

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
        title={t('body.section-3.description.part-1.title')}
        downloadBtn
        downloadBtnText={t('body.section-3.description.part-1.btn')}
      >
        <BusinessSwipeList
          contentObject={JSON.parse(t('body.section-3.description.part-1.description'))}
          fileSrc={'/images/business/market/fresh'}
        />
      </BusinessAccordion>
      <BusinessAccordion
        number={2}
        title={t('body.section-3.description.part-2.title')}
        downloadBtn
        downloadBtnText={t('body.section-3.description.part-1.btn')}
      >
        <BusinessSwipeList
          contentObject={JSON.parse(t('body.section-3.description.part-2.description'))}
          fileSrc={`/images/business/market/processed`}
        />
      </BusinessAccordion>
      <BusinessAccordion
        number={3}
        title={t('body.section-3.description.part-3.title')}
        downloadBtn
        downloadBtnText={t('body.section-3.description.part-1.btn')}
      >
        <BusinessSwipeList
          contentObject={JSON.parse(t('body.section-3.description.part-3.description'))}
          fileSrc={'/images/business/market/manufactured'}
        />
      </BusinessAccordion>
    </ul>
  ));
}

export default GlobalBusinessScope;