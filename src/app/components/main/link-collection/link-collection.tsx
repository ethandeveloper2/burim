'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import styles from './link-collection.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import useResponsive from '@Hooks/useResponsive';
import { links } from '@Constants/main';
import MobileLinkCard from '@Components/main/mobile-link-card/mobile-link-card';
import DesktopLinkCard from '@Components/main/desktop-link-card/desktop-link-card';

const LinkCollection = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate('home', languageParam);
  const { greaterThanLarge } = useResponsive();

  const [mounted, setMounted] = useState(false);
  const [hoverStates, setHoverStates] = useState([false, false, false, false]);

  useEffect(() => {
    setMounted(true);
  }, []); 

  return (mounted && (
    greaterThanLarge ? (
      <ul
        className={styles['desktop-container']}
      >
        {hoverStates.map((hover, idx) => {
          return (
            <li
              className={styles.li}
              key={`destop_link_${idx}`}
              onMouseEnter={() => {
                setHoverStates(() => {
                  const state = [false, false, false, false];
                  state[idx] = true;

                  return state;
                });
              }}
              onMouseLeave={() => {
                setHoverStates(() => [false, false, false, false]);
              }}
            >
              <DesktopLinkCard
                isHover={hover}
                ellipsis={hoverStates.includes(true)}
                src={`/images/main/${idx + 1}.png`}
                title={t(`links.${idx + 1}.title`)}
                description={t(`links.${idx + 1}.description`)}
                href={`/${languageParam}${links[idx + 1]}`}
                btnText={t(`links.${idx + 1}.link`)}
                btnClickHandler={
                  idx === 3 ? 
                    () => {
                      alert('해당 페이지는 준비중입니다.');
                    } 
                    : undefined
                }
              />
            </li>
          );
        })}
      </ul>
    ) : (
      <ul
        className={styles['mobile-container']}
      >
        {hoverStates.map((_, idx) => {
          return (
            <li
              className={styles.li}
              key={`destop_link_${idx}`}
              onMouseEnter={() => {
                setHoverStates(() => {
                  const state = [false, false, false, false];
                  state[idx] = true;

                  return state;
                });
              }}
              onMouseLeave={() => {
                setHoverStates(() => [false, false, false, false]);
              }}
            >
              <MobileLinkCard
                src={`/images/main/${idx + 1}.png`}
                title={t(`links.${idx + 1}.title`)}
                description={t(`links.${idx + 1}.description`)}
                href={`/${languageParam}${links[idx + 1]}`}
                btnText={t(`links.${idx + 1}.link`)}
                btnClickHandler={
                  idx === 3 ? 
                    () => {
                      alert('해당 페이지는 준비중입니다.');
                    } 
                    : undefined
                }
              />
            </li>
          );
        })}
      </ul>
    )
  ));
}

export default LinkCollection;