'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './mobile-header.module.css';
import logo from '@Public/logos/logo.png';
import mobileMenuIcon from '@Public/icons/mobile-menu.svg';

const MobileHeader = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <header
      className={styles.header}
    >
      <div
        className={styles.container}
      >
        <Image
          src={logo}
          alt={'burim logo'}
          width={111}
          height={28}
        />
        <button
          className={styles['menu-btn']}
          type={'button'}
          onClick={() => {
            // TODO: 메뉴 오픈
          }}
        >
          <Image
            src={mobileMenuIcon}
            alt={'menu'}
            width={24}
            height={24}
          />
        </button>
      </div>
    </header>
  ));
}

export default MobileHeader;