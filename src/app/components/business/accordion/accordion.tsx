'use client'

import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';

import styles from './accordion.module.css';
import arrowUpIcon from '@Public/icons/arrow/arrow-up-green.svg';
import arrowDownIcon from '@Public/icons/arrow/arrow-down-white.svg';
import Bold from '@Components/common/typo/bold/bold';

const BusinessAccordion = ({
  title,
  children,
  indexText = '',
  initialOpen = false,
}: {
  title: string;
  children: ReactNode;
  indexText?: string;
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
          {indexText && (
            <Bold
              classNames={[
                'text-[16px] lg:text-[24px]',
                isOpen ? 'text-white' : 'text-black',
              ]}
            >{indexText}</Bold>
          )}
          <Bold
            classNames={[
              'text-[14px] lg:text-[20px]',
              isOpen ? 'text-white' : 'text-black',
            ]}
          >{title}</Bold>
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
            width={28}
            height={28}
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