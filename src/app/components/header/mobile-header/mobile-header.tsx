'use client'

import { Fragment, useEffect, useState } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import styles from './mobile-header.module.css';
import { links } from '@Constants/header-link';
import { languageList } from '@Constants/header-link';
import useTranslate from '@Hooks/useTranslate';
import { language } from '@Types/type';
import { extractPath } from '@Utils/path';
import logo from '@Public/logos/logo.png';
import closeIcon from '@Public/icons/close-white.svg';
import mobileMenuIcon from '@Public/icons/mobile-menu.svg';
import Regular from '@Components/common/typo/regular/regular';

const MobileHeader = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate('header', languageParam);
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuClickState, setMenuClickState] = useState([false, false, false, false]);

  const menus = Object.keys(links);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLinks = (key: string): string[] => {
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
          <button
            className={styles['menu-btn']}
            type={'button'}
            onClick={() => {
              setIsOpen(true);
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
      
      {isOpen && (
        <section
          className={styles.body}
        >
          <div
            className={styles['body-wrapper']}
          >
            <div
              className={styles['body-upward']}
            >
              <div
                className={styles['close-btn-wrapper']}
              >
                <button
                  type={'button'}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Image
                    src={closeIcon}
                    alt={'close menu'}
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <ul
                className={styles.menus}
              >
                {menus.map((menuKey: string, menuKeyIdx: number) => {
                  return (
                    <li
                      className={styles.menu}
                      key={`mobile_header_layer_${menuKey}`}
                      onClick={() => {
                        setMenuClickState(() => {
                          const state = [false, false, false, false];
                          state[menuKeyIdx] = true;

                          return state; 
                        })
                      }}
                    >
                      <Regular
                        classNames={[
                          'text-[20px]',
                          'text-white',
                          styles['main-menu'],
                        ]}
                      >{menuKey}</Regular>
                      <ul
                        className={`${styles['sub-ul']} ${menuClickState[menuKeyIdx] ? styles.show : ''}`}
                      >
                        {getLinks(menuKey).map((el, idx) => {
                          return (
                            <li
                              className={styles['sub-li']}
                              key={`mobile_sub_menu_${el}`}
                            >
                              <Link
                                href={`/${languageParam}/${links[menuKey][idx + 1]}`}
                                onClick={() => {
                                  setIsOpen(false);
                                }}
                                key={`mobile_sub_menu_${el}`}
                              >
                                <Regular
                                  classNames={[
                                    'text-[16px]',
                                    'text-white',
                                  ]}
                                >{t(`${menuKey}.${idx + 1}`)}</Regular>
                              </Link>
                            </li>
                          );
                        })}                     
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
              
            {/* 언어 번역 버튼 */}
            <div
              className={styles['language-btn-container']}
            >
              {languageList.map((language, idx) => {
                return (
                  <Fragment
                    key={`mobile_language_${language}`}
                  >
                    <button
                      className={styles.btn}
                      
                      onClick={() => {
                        router.replace(`/${language.toLocaleLowerCase()}${extractPath(pathname)}`);
                        setIsOpen(false);
                      }}
                    >
                      <Regular
                        classNames={[
                          'text-[16px]',
                          language.toLocaleLowerCase() === languageParam ? 'text-white' : 'text-grey-300',
                          language.toLocaleLowerCase() === languageParam ? 'font-semibold' : '',
                        ]}
                        align={'center'}
                      >{language}</Regular>
                    </button>
                    {languageList.length - 1 !== idx && (
                      <span
                        className={styles.slash}
                      />
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  ));
}

export default MobileHeader;