import Image from 'next/image';
import { Fragment } from 'react';

import styles from './page.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import bgImage from '@Public/images/company/history/001.png';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import Regular from '@Components/common/typo/regular/regular';
import CompanyPageTitle from '@Components/company/page-title/page-title';
import ContactQuickLink from '@Components/contact-quick-link/contact-quick-link';

const HistoryPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('company.history', params.language);

  const explainObj = JSON.parse(t('header.explain'));
  const historyObj = JSON.parse(t('body'));

  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.header}
      >
        <Image
          className={styles.background}
          src={bgImage}
          alt={''}
          fill
        />
        <div
          className={styles.content}
        >
          <CompanyPageTitle
            subTitle={t('header.titles.sub')}
            mainTitle={t('header.titles.main')}
          />
          <div
            className={styles['explain-container']}
          >
            {Object.keys(explainObj).map((key: string) => {
              return (
                <Fragment
                  key={`header_explain_${key}`}
                >
                  <Medium
                    classNames={[
                      'text-[16px] lg:text-[32px]',
                      'text-white',
                    ]}
                  >{explainObj[key]}</Medium>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={styles.body}
      >
        {/* 최신순 정렬 */}
        {Object.keys(historyObj).sort((a,b) => Number(b)-Number(a)).map((sectionKey: string) => {
          const yearObj = historyObj[sectionKey].contents;
          
          return (
            <section
              className={styles.section}
              key={`section_${sectionKey}`}
            >
              <div
                className={styles['section-header']}
              >
                <div
                  className={styles['section-header-img-wrapper']}
                >
                  <Image
                    className={styles['header-img']}
                    src={`/images/company/history/${sectionKey}.png`}
                    alt={''}
                    fill
                  />
                </div>
                <div
                  className={styles['section-header-square']}
                >
                  <Bold
                    classNames={[
                      'text-[16px] lg:text-[32px]',
                      'text-white',
                    ]}
                  >{historyObj[sectionKey].title}</Bold>
                  <Bold
                    classNames={[
                      'text-[15px] lg:text-[24px]',
                      'text-white',
                    ]}
                    align={'end'}
                  >{historyObj[sectionKey].description}</Bold>
                </div>
              </div>
              
              <div
                className={styles['section-body']}
              >
                {Object.keys(yearObj).map((yearKey) => {
                  const monthObj = yearObj[yearKey];

                  return (
                    <div
                      className={styles['year-row']}
                      key={`year_group_${yearKey}`}
                    >
                      <div
                        className={styles.dot}
                      />
                      <Medium
                        classNames={[
                          'text-[24px] lg:text-[36px]',
                        ]}
                      >{yearKey}</Medium>
                      <ul
                        className={styles['month-details']}
                      >
                        {Object.keys(monthObj).map((monthKey) => {
                          return (
                            <li
                              className={styles['month-row']}
                              key={`month_group_${monthKey}`}
                            >
                              <Medium
                                classNames={[
                                  'text-[14px] lg:text-[24px]',
                                  'text-grey-700',
                                ]}
                              >{monthKey}</Medium>
                              <Regular
                                classNames={[
                                  'text-[14px] lg:text-[24px]',
                                  'text-grey-700',
                                ]}
                              >{monthObj[monthKey]}</Regular>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
                
              </div>
            </section>
          )
        })}
      </div>

      <div
        className={styles.footer}
      >
        <ContactQuickLink />
      </div>
    </div>
  );
}

export default HistoryPage;