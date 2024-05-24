'use client'

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

import styles from './market-download-btn.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import downloadIcon from '@Public/icons/download-white.svg';
import Regular from '@Components/common/typo/regular/regular';

const MarketDownloadBtn = () => {
  const freshFileLinkEl = useRef<HTMLAnchorElement>(null);
  const pbFileLinkEl = useRef<HTMLAnchorElement>(null);
  const processedFileLinkEl = useRef<HTMLAnchorElement>(null);

  const { language: languageParam } = useParams<{ language: language }>(); 
  const { t } = useTranslate('business.global-markets', languageParam);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const downloadFiles = () => {
    freshFileLinkEl.current?.click();
    pbFileLinkEl.current?.click();
    processedFileLinkEl.current?.click();
  }

  return (mounted && (
    <>
      <button
        className={styles['download-btn']}
        onClick={downloadFiles}
      >
        <Regular
          classNames={[
            'text-[12px] lg:text-[14px]',
            'text-white',
          ]}
        >{t('body.section-3.btn')}</Regular>
        <Image
          className={styles.icon}
          src={downloadIcon}
          alt={''}
          width={20}
          height={20}
        />
      </button>
      
      {/* 02 pb상품만 언어설정에 따라 파일 변경 */}
      <a
        ref={freshFileLinkEl}
        className={styles.files}
        href={`/file/01_burim_fresh_item.pdf`}
        download
      />
      <a
        ref={pbFileLinkEl}
        className={styles.files}
        href={`/file/02_burim_pb_${languageParam}.pdf`}
        download
      />
      <a
        ref={processedFileLinkEl}
        className={styles.files}
        href={`/file/03_burim_processed_food.pdf`}
        download
      />
    </>
  ));
}

export default MarketDownloadBtn;