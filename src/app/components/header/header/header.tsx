'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.css';
import useResponsive from '@Hooks/useResponsive';
import useTranslate from '@Hooks/useTranslate';
import logo from '@Public/logos/logo.png';
import { language } from '@Types/type';
import { links } from '@Constants/header-link';
import Medium from '@Components/common/typo/medium/medium';
import MobileHeader from '@Components/header/mobile-header/mobile-header';

const Header = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate('header', languageParam);
  const {greaterThanLarge} = useResponsive();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoverMenuKey, setHoverMenuKey] = useState('');

  const menus = Object.keys(links);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLinks = (key: string) => {
    const obj = JSON.parse(t(key));
    const objKeys = Object.keys(obj);

    let linkList: string[] = [];

    for(let i = 0; i < objKeys.length; i++) {
      linkList[i] = obj[i + 1];
    }

    return linkList;
  }

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
                {menus.map((menu) => {
                  return (
                    <div
                      key={`header_menu_${menu}`}
                      onMouseOver={() => {
                        setIsOpen(true);
                        setHoverMenuKey(menu);
                      }}
                    >
                      <Medium
                        classNames={[
                          'text-[18px]',
                          styles.menu
                        ]}
                      >{menu}</Medium>
                    </div>
                  );
                })}
              </div>
              <div
                className={styles.language}
              >
                kr
              </div>
            </div>
          </div>
          {isOpen && (
            <div
              className={styles.layer}
              onMouseOver={() => {
                setIsOpen(true);
              }}
              onMouseOut={() => {
                setIsOpen(false);
              }}
            >
              <div
                className={styles['layer-menu-container']}
              >
                {getLinks(hoverMenuKey).map((el, idx) => {
                  return (
                    <div
                      className={styles['layer-menu']}
                    >
                      <Link
                        href={`/${languageParam}${links[hoverMenuKey][idx+1]}`}
                      >{el}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </header>
      ) : (
        <MobileHeader />
      )}
    </>
  ));
}

export default Header;