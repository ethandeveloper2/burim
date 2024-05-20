'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './desktop-link-card.module.css';
import arrowIcon from '@Public/icons/arrow/right-black.svg';
import markIcon from '@Public/icons/book-mark-green.svg';
import Bold from '@Components/common/typo/bold/bold';
import Regular from '@Components/common/typo/regular/regular';
import RoundButton from '@Components/common/buttons/round-button/round-button';

const DesktopLinkCard = ({
  title,
  description,
  src,
  href,
  btnText,
  btnClickHandler, 
  isHover = false,
  isClearance = false,
  ellipsis = false,
} : {
  title: string;
  description: string;
  src: string;
  href: string;
  btnText: string;
  btnClickHandler?: Function; // href 없는 경우 필요
  isHover?: boolean;
  isClearance?: boolean;
  ellipsis?: boolean;
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

      {isClearance && isHover && (
        <Image
          className={styles['hover-icon']}
          src={markIcon}
          alt={''}
          width={90}
          height={150}
        />
      )}

      <div
        className={styles.header}
      >
        <Bold
          classNames={[
            'text-[48px]',
            'text-white',
          ]}
        >{title}</Bold>

        {isHover && (
          <>
            <Regular
              classNames={[
                'text-[25px]',
                'text-white',
                ellipsis && !isHover ? 'ellipsis' : '',
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
                px={32}
                py={16}
              >
                <div
                  className={styles.row}
                >
                  <Regular
                    classNames={[
                      'text-[20px]',
                    ]}
                    mr={20}
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
          </>
        )}
      </div>
    </div>
  ));
}

export default DesktopLinkCard;