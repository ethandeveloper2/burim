'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.css';
import useResponsive from '@/app/hooks/useResponsive';
import MobileHeader from '@Components/header/mobile-header/mobile-header';
import logo from '@Public/logos/logo.png';
import Medium from '../../common/typo/medium/medium';
import { language } from '@Types/type';

const Header = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const {greaterThanLarge} = useResponsive();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <>
      {greaterThanLarge ? (
        <header
          className={styles.header}
        >
          <div
            className={styles.container}
          >
            <Link
              href={`/${languageParam}`}
            >
              <Image
                src={logo}
                alt={'burim logo'}
                width={111}
                height={28}
              />
            </Link>
            <div
              className={styles.right}
            >
              <div
                className={styles.menus}
              >
                <Medium
                  classNames={[
                    'text-[18px]',
                    styles.menu
                  ]}
                >COMPANY</Medium>
                <Medium
                  classNames={[
                    'text-[18px]',
                    styles.menu
                  ]}
                >BUSINESS</Medium>
                <Medium
                  classNames={[
                    'text-[18px]',
                    styles.menu
                  ]}
                >CONTACT US</Medium>
                <Medium
                  classNames={[
                    'text-[18px]',
                    styles.menu
                  ]}
                >RECRUIT</Medium>
              </div>
              <div
                className={styles.language}
              >
                kr
              </div>
            </div>
          </div>
        </header>
      ) : (
        // 모바일
        <MobileHeader />
      )}
    </>
  ));
}

export default Header;