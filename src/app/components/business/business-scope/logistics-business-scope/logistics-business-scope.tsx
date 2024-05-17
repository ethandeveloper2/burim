'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import 'swiper/css';

import styles from './logistics-business-scope.module.css';
import BusinessSwipeList from '@Components/business/business-swipe-list/business-swipe-list';
import BusinessAccordion from '@Components/business/accordion/accordion';
import useTranslate from '@Hooks/useTranslate';
import { language } from '@Types/type';

const LogisticsBusinessScope = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate('business.logistics-solutions', languageParam);

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
        initialOpen
      >
        <BusinessSwipeList
          contentObject={JSON.parse(t('body.section-3.description.part-1.description'))}
          fileSrc={'/images/business/logistics/storage'}
        />
      </BusinessAccordion>
      <BusinessAccordion
        number={2}
        title={t('body.section-3.description.part-2.title')}
      >
        <BusinessSwipeList
          contentObject={JSON.parse(t('body.section-3.description.part-2.description'))}
          fileSrc={`/images/business/logistics/transportation`}
        />
      </BusinessAccordion>
    </ul>
  ));
}

export default LogisticsBusinessScope;