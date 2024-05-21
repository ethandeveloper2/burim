'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

import styles from './header.module.css';
import useResponsive from '@Hooks/useResponsive';
import useTranslate from '@Hooks/useTranslate';
import logo from '@Public/logos/logo.png';
import languageArrowIcon from '@Public/icons/arrow/triangle-arrow-grey.svg';
import { language } from '@Types/type';
import { extractPath } from '@Utils/path';
import { links, languageList } from '@Constants/header-link';
import Medium from '@Components/common/typo/medium/medium';
import Regular from '@Components/common/typo/regular/regular';
import MobileHeader from '@Components/header/mobile-header/mobile-header';

const Header = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate('header', languageParam);
  const {greaterThanLarge} = useResponsive();
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoverMenuKey, setHoverMenuKey] = useState('');
  const [isLanguageToggleOpen, setIsLagnuageToggleOpen] = useState(false);
  const [language, setLanguage] = useState('');

  const menus = Object.keys(links);

  useEffect(() => {
    setMounted(true);

    setLanguage(languageList.find((lang) => {
      if (languageParam) {
        return lang.toLowerCase() === languageParam.toLowerCase();
      }
    }) || languageList[0]);
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
                width={155}
                height={39}
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
                      className={styles['menu-btn']}
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
                onClick={() => setIsLagnuageToggleOpen(!isLanguageToggleOpen)}
              >
                <Regular
                  classNames={[
                    'text-[16px]',
                  ]}
                >{language}</Regular>
                <Image
                  className={`${styles.arrow} ${isLanguageToggleOpen ? styles['arrow-open'] : ''}`}
                  src={languageArrowIcon}
                  alt={''}
                  width={12}
                  height={12}
                />
                {isLanguageToggleOpen && (
                  <ul
                    className={`${styles['dropdown-menus']}`}
                  >
                    {languageList.map((lang, idx) => {
                      return (
                        <li
                          className={styles['dropdown-menu']}
                          key={`language_${lang}`}
                          onClick={() => {
                            setLanguage(languageList[idx]);
                            setIsLagnuageToggleOpen(false);
                            router.replace(`/${lang.toLocaleLowerCase()}${extractPath(pathname)}`);
                          }}
                        >
                          <Regular
                            classNames={[
                              'text-[16px]',
                            ]}
                          >{lang}</Regular>
                        </li>
                      )
                    })}
                  </ul>
                )}
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
                      key={`layer_menu_${el}`}
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