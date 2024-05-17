'use client'

import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';

import styles from './accordion.module.css';
import arrowUpIcon from '@Public/icons/arrow/arrow-up-green.svg';
import arrowDownIcon from '@Public/icons/arrow/arrow-down-white.svg';
import downloadIcon from '@Public/icons/download-white.svg';
import Bold from '@Components/common/typo/bold/bold';
import Regular from '@Components/common/typo/regular/regular';

const BusinessAccordion = ({
  title,
  children,
  number,
  downloadBtn = false,
  downloadBtnText = '',
  initialOpen = false,
}: {
  title: string;
  children: ReactNode;
  number?: number;
  downloadBtn?: boolean;
  downloadBtnText?: string;
  initialOpen?: boolean;
}) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (initialOpen) {
      setIsOpen(true);
    }
  }, []);

  return (mounted && (
    <div
      className={styles.container}
    >
      <section
        className={[
          styles.header,
          isOpen ? styles.opened : '',
        ].join(' ')}
      >
        <div
          className={styles['title-container']}
        >
          {number && (
            <Bold
              classNames={[
                'text-[24px] lg:text-[40px]',
                isOpen ? 'text-white' : 'text-black',
              ]}
            >{number}</Bold>
          )}
          <Bold
            classNames={[
              'text-[20px] lg:text-[36px]',
              isOpen ? 'text-white' : 'text-black',
            ]}
          >{title}</Bold>

          {downloadBtn && (
            <button
              className={styles['download-btn']}
              type={'button'}
            >
              <Regular
                classNames={[
                  'text-[14px]',
                  'text-white',
                ]}
              >{downloadBtnText}</Regular>
              <Image
                src={downloadIcon}
                alt={''}
                width={20}
                height={20}
              />
            </button>
          )}
        </div>

        {/* 오픈버튼 */}
        <button
          className={[
            styles.btn,
            isOpen ? styles['open-btn'] : styles['close-btn'],
          ].join(' ')}
          type={'button'}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Image
            className={styles.icon}
            src={isOpen ? arrowUpIcon : arrowDownIcon}
            alt={''}
          />
        </button>
      </section>

      {isOpen && (
        <section
          className={[
            styles.body,
          ].join(' ')}
        >{children}</section>
      )}
    </div>
  ));
}

export default BusinessAccordion;