'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './mobile-link-card.module.css';
import arrowIcon from '@Public/icons/arrow/right-black.svg';
import Bold from '@Components/common/typo/bold/bold';
import Regular from '@Components/common/typo/regular/regular';
import RoundButton from '@Components/common/buttons/round-button/round-button';

const MobileLinkCard = ({
  title,
  description,
  src,
  href,
  btnText,
  btnClickHandler, 
} : {
  title: string;
  description: string;
  src: string;
  href: string;
  btnText: string;
  btnClickHandler?: Function; // href 없는 경우 필요
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <div
      className={styles.container}
    >
      <Image
        className={styles.background}
        src={src}
        alt={''}
        fill
      />
      <div
        className={styles.header}
      >
        <Bold
          classNames={[
            'text-[20px]',
            'text-white',
          ]}
        >{title}</Bold>
        <Regular
          classNames={[
            'text-[12px]',
            'text-white',
          ]}
          mb={20.5}
        >{description}</Regular>
        <Link
          href={href}
          scroll={!!btnClickHandler ? false : true}
          onClick={() => {
            if (btnClickHandler) {
              btnClickHandler();
            }
          }}
        >
          <RoundButton
            bgColor={'white'}
            px={12}
            py={4}
          >
            <div
              className={styles.row}
            >
              <Regular
                classNames={[
                  'text-[12px]',
                ]}
                mr={4}
              >{btnText}</Regular>
              <Image
                src={arrowIcon}
                alt={''}
                width={16}
                height={16}
              />
            </div>
          </RoundButton>
        </Link>

      </div>
    </div>
  ));
}

export default MobileLinkCard;