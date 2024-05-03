import Image from 'next/image';
import { Fragment } from 'react';

import styles from './page.module.css';
import firstImage from '@Public/images/business/logistics/001.png';
import ContactQuickLink from '@Components/contact-quick-link/contact-quick-link';
import Regular from '@Components/common/typo/regular/regular';
import Bold from '@Components/common/typo/bold/bold';
import BusinessCard from '@Components/business/card/card';
import ClearanceBusinessScope from '@Components/business/business-scope/clearance-business-scope/clearance-business-scope';
import TitleWithEnglish from '@Components/title-with-english/title-with-english';
import useTranslate from '@Hooks/useTranslate';
import { language } from '@Types/type';

const LogisticsSolutionsPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('business.logistics-solutions', params.language);

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
                'text-[26px] lg:text-[40px]',
              ]}
            >{t('body.section-2.title')}</Bold>

            <ul
              className={styles.ul}
            >
              {[0,0,0,0].map((_, idx: number) => {
                return (
                  <li
                    key={`section_2_${idx}`}
                    className={styles.li}
                  >
                    <BusinessCard 
                      title={t(`body.section-2.description.part-${idx+1}.title`)}
                      highlight={t(`body.section-2.description.part-${idx+1}.highlight`)}
                      highlightSuffix={t(`body.section-2.description.part-${idx+1}.highlight-suffix`)}
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
            <Bold
              classNames={[
                'text-[26px] lg:text-[40px]',
              ]}
            >{t('body.section-3.title')}</Bold>
            <div
              className={styles['ul-wrapper']}
            >
              <ClearanceBusinessScope />
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

export default LogisticsSolutionsPage;