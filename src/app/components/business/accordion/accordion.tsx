'use client'
import { useState, useEffect, ReactNode } from 'react';

import styles from './accordion.module.css';
import Bold from '@Components/common/typo/bold/bold';
import Image from 'next/image';
import arrowUpIcon from '@Public/icons/arrow/arrow-up-green.svg';
import arrowDownIcon from '@Public/icons/arrow/arrow-down-white.svg';

const BusinessAccordion = ({
  number,
  title,
  children,
}: {
  title: string;
  children: ReactNode;
  number?: number;
}) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
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
                'text-[16px] lg:text-[24px]',
                'text-green-1',
              ]}
            >{number}</Bold>
          )}
          <Bold
            classNames={[
              'text-[16px] lg:text-[24px]',
              'text-green-1',
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
            src={isOpen ? arrowUpIcon : arrowDownIcon}
            alt={''}
            width={36}
            height={36}
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