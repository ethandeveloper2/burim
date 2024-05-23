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
  const foodFileLinkEl = useRef<HTMLAnchorElement>(null);
  const goodsFileLinkEl = useRef<HTMLAnchorElement>(null);

  const { language: languageParam } = useParams<{ language: language }>(); 
  const { t } = useTranslate('business.global-markets', languageParam);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const downloadFiles = () => {
    freshFileLinkEl.current?.click();
    foodFileLinkEl.current?.click();
    goodsFileLinkEl.current?.click();
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

      {/* 다운로드 파일 링크(숨김 처리) */}
      {/* TODO: 다운로드 경로 변경, 파일명 변경(download 설정값), 언어 설정에 따라 다운로드되는 파일 분기 처리,  */}
      <a
        ref={freshFileLinkEl}
        className={styles.files}
        href={`/file/001.pdf`}
        download={''}
      />
      <a
        ref={foodFileLinkEl}
        className={styles.files}
        href={`/file/002.pdf`}
        download={''}
      />
      <a
        ref={goodsFileLinkEl}
        className={styles.files}
        href={`/file/003.pdf`}
        download={''}
      />
    </>
  ));
}

export default MarketDownloadBtn;