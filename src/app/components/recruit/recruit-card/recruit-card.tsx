'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

import styles from './recruit-card.module.css';
import arrowIcon from '@Public/icons/arrow/right-white.svg';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import Regular from '@Components/common/typo/regular/regular';
import RoundButton from '@Components/common/buttons/round-button/round-button';
import useResponsive from '@Hooks/useResponsive';

const RecruitCard = ({
  subTitle,
  title,
  deadline,
  link,
} : {
  subTitle: string;
  title: string;
  deadline: string;
  link: string;
}) => {
  const { greaterThanLarge } = useResponsive();
  
  const [mounted, setMounted] = useState(false);

  const dueDate = moment(deadline);
  const dDay = dueDate.diff(moment(), 'days');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <div
      className={styles.container}
    >
      <div
        className={styles.left}
      >
        <Regular
          classNames={[
            'text-[12px] lg:text-[20px]',
          ]}
        >{subTitle}</Regular>
        <Bold
          classNames={[
            'text-[16px] lg:text-[24px]',
          ]}
        >{title}</Bold>
        <div
          className={styles.time}
        >
          <Bold
            classNames={[
              'text-[12px] lg:text-[20px]',
            ]}
          >{dDay > 0 ? `D-${dDay}` : '마감'}</Bold>
          <Medium
            classNames={[
              'text-[12px] lg:text-[20px]',
            ]}
          >{dueDate.format('YYYY.MM.DD h:mm')}</Medium>
        </div>
        
      </div>
    
      <Link
        className={styles.link}
        href={dDay > 0 ? link : '#'}
      >
        <RoundButton
          bgColor={dDay > 0 ? 'green' : 'grey'}
          py={greaterThanLarge ? 15 : 12}
          px={greaterThanLarge ? 24 : 12}
          full
        >
          <div
            className={styles['btn-wrapper']}
          >
            {greaterThanLarge && (
              <Regular
                classNames={[
                  'text-[20px]',
                  'text-white',
                ]}
                align={'center'}
              >{dDay > 0 ? '접수중' : '마감'}</Regular>
            )}
            <Image
              className={styles.icon}
              src={arrowIcon}
              alt={''}
              width={20}
              height={20}
            />
          </div>
        </RoundButton>
      </Link>
    </div>
  ));
}

export default RecruitCard;