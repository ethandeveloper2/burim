'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import footerLogo from '@Public/logos/logo-grey.png';
import Regular from '@Components/common/typo/regular/regular';

const Footer = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate('footer', languageParam);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <footer
      className={styles.container}
    >
      <div
        className={styles.header}
      >
        <Image
          className={styles.logo}
          src={footerLogo}
          alt={'burim'}
        />

        <div
          className={styles.second}
        >
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{t(`company.middle.1`)}</Regular>
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{t(`company.middle.2`)}</Regular>
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{t(`company.middle.3`)}</Regular>
        </div>
        <div
          className={styles.third}
        >
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{t(`company.right.1`)}</Regular>
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{t(`company.right.2`)}</Regular>
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{t(`company.right.3`)}</Regular>
        </div>
      </div>

      {/* 분리선 */}
      <div
        className={styles.body}
      />

      <div
        className={styles.footer}
      >
        <div
          className={styles['link-wrapper']}
        >
          <Link
            className={styles.link}
            href={`/${languageParam}/terms`}
          >{t(`policy.terms`)}</Link>
          <Link
            className={styles.link}
            href={`/${languageParam}/privacy`}
          >{t(`policy.privacy`)}</Link>
        </div>
        <Regular
          classNames={[
            'text-[12px]',
            styles.copyright,
            styles['footer-text'],
          ]}
        >{t('copyright')}</Regular>
      </div>
    </footer>
  ));
}

export default Footer;