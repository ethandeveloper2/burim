import Image from 'next/image';
import { Fragment } from 'react';

import styles from './page.module.css';
import firstImage from '@Public/images/business/market/001.png';
import pbLogo from '@Public/logos/pb-logo.png';
import useTranslate from '@Hooks/useTranslate';
import { language } from '@Types/type';
import ContactQuickLink from '@Components/contact-quick-link/contact-quick-link';
import Regular from '@Components/common/typo/regular/regular';
import Bold from '@Components/common/typo/bold/bold';
import BusinessCard from '@Components/business/card/card';
import GlobalBusinessScope from '@Components/business/business-scope/global-business-scope/global-business-scope';
import TitleWithEnglish from '@Components/title-with-english/title-with-english';
import MarketDownloadBtn from '@Components/business/market-download-btn/market-download-btn';

const GlobalMarketPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('business.global-markets', params.language);

  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.main}
      >
        <div
          className={styles.header}
        >
          <TitleWithEnglish
            firstLine={t('title.first-line')}
            secondLine={t('title.second-line')}
          />
          <div
            className={styles.explain}
          >
            {t('explain').split('\n').map((el: string, idx: number) => {
              return (
                <Fragment
                  key={`page_explain_${idx}`}
                >
                  <Regular
                    classNames={[
                      'text-[14px] lg:text-[20px]'
                    ]}
                    align={'center'}
                  >{el}</Regular>
                </Fragment>
              )
            })}
          </div>
        </div>
        <div
          className={styles.body}
        >
          <div
            className={styles.first}
          >
            <div
              className={styles['img-wrapper']}
            >
              <Image
                className={styles.img}
                src={firstImage}
                alt={''}
                fill
                sizes={'(max-width: 390px) 100vw, (max-width: 1299px) 350px, 1144px'}
              />
            </div>

            <div
              className={styles.contents}
            >
              <div
                className={styles['first-contents']}
              >
                <Bold
                  classNames={[
                    'text-[16px] lg:text-[20px]',
                  ]}
                  mb={8}
                >{t('body.section-1.part-1.title')}</Bold>
                <div>
                  {t('body.section-1.part-1.description').split('\n').map((el: string, idx: number) => {
                    return (
                      <Fragment
                        key={`section_1_left_${idx}`}
                      >
                        <Regular
                          classNames={[
                            'text-[16px] lg:text-[20px]',
                          ]}
                        >{el}</Regular>
                      </Fragment>
                    )
                  })}
                </div>
              </div>
              <div
                className={styles['second-contents']}
              >
                <Bold
                  classNames={[
                    'text-[16px] lg:text-[20px]',
                  ]}
                  mb={8}
                >{t('body.section-1.part-2.title')}</Bold>
                <div>
                  {t('body.section-1.part-2.description').split('\n').map((el: string, idx: number) => {
                    return (
                      <Fragment
                        key={`section_1_right_${idx}`}
                      >
                        <Regular
                          classNames={[
                            'text-[16px] lg:text-[20px]',
                          ]}
                        >{el}</Regular>
                      </Fragment>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 한눈에 보기 */}
          <div
            className={styles.second}
          >
            <Bold
              classNames={[
                'text-[20px] lg:text-[32px]',
              ]}
            >{t('body.section-2.title')}</Bold>

            <ul
              className={styles.ul}
            >
              <li
                className={styles.li}
              >
                <div
                  className={styles['first-business-card']}
                >
                  <Bold
                    classNames={[
                      'text-[14px] lg:text-[20px]',
                    ]}
                  >{t(`body.section-2.description.part-${1}.title`)}</Bold>
                  <div
                    className={styles['pb-logo-wrapper']}
                  >
                    <Image
                      src={pbLogo}
                      alt={'pb brand logo'}
                      fill
                      sizes={'(max-width: 1299px) 115px, 185px'}
                    />
                  </div>
                </div>
              </li>
              {[2,3,4].map((el: number) => {
                return (
                  <li
                    key={`section_2_${el}`}
                    className={styles.li}
                  >
                    <BusinessCard 
                      title={t(`body.section-2.description.part-${el}.title`)}
                      highlight={t(`body.section-2.description.part-${el}.highlight`)}
                      highlightSuffix={t(`body.section-2.description.part-${el}.highlight-suffix`)}
                    />
                  </li>
                )
              })}
            </ul>
          </div>

          {/* 사업 분야 */}
          <div
            className={styles.third}
          >
            <div
              className={styles['title-container']}
            >
              <Bold
                classNames={[
                  'text-[20px] lg:text-[32px]',
                ]}
              >{t('body.section-3.title')}</Bold>

              {/* pdf 다운로드 버튼 */}
              <MarketDownloadBtn />
            </div>

            <div
              className={styles['ul-wrapper']}
            >
              <GlobalBusinessScope />
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.footer}
      >
        <ContactQuickLink />
      </div>
    </div>
  );
}

export default GlobalMarketPage;