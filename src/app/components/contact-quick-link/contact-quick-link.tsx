'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import styles from './contact-quick-link.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import backgroundImage from '@Public/images/shortcut-bg.png';
import arrowIcon from '@Public/icons/arrow/right-black.svg';
import RoundButton from '@Components/common/buttons/round-button/round-button';
import Regular from '@Components/common/typo/regular/regular';
import Bold from '@Components/common/typo/bold/bold';

const ContactQuickLink = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate('quick-link', languageParam);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <div
      className={styles.container}
    >
      <Image
        className={styles.header}
        src={backgroundImage}
        alt={''}
        fill
      />

      <div
        className={styles.body}
      >
        <Bold
          classNames={[
            'text-[26px] lg:text-[32px]',
            'text-white',
          ]}
          align={'center'}
        >{t('description')}</Bold>
        <Link
          href={`/${languageParam}/contact`}
        >
          <RoundButton
            bgColor={'white'}
            py={15}
            px={24}
          >
            <div
              className={styles.btn}
            >
              <Regular
                classNames={[
                  'text-[14px] lg:text-[20px]',
                ]}
              >{t('btn')}</Regular>
              <Image
                src={arrowIcon}
                alt={''}
                width={20}
                height={20}
              />
            </div>
          </RoundButton>
        </Link>
      </div>
    </div>
  ));
}

export default ContactQuickLink;