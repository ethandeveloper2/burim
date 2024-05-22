import Image from 'next/image';
import { Fragment } from 'react';

import styles from './page.module.css';
import { language } from '@Types/type';
import bgImage from '@Public/images/company/values/001.png';
import useTranslate from '@Hooks/useTranslate';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import CompanyPageTitle from '@Components/company/page-title/page-title';
import BurimValuesSchema from '@Components/company/business-values/values-schema/values-schema';

const BusinessValuesPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('company.business-values', params.language);

  const explainObject = JSON.parse(t('header.explain'));
  const footerObject = JSON.parse(t('footer'));

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
            {Object.keys(explainObject).map((key: string) => {
              return (
                <Fragment
                  key={`header_explain_${key}`}
                >
                  <Medium
                    classNames={[
                      'text-[16px] lg:text-[24px]',
                      'text-white',
                    ]}
                  >{explainObject[key]}</Medium>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <BurimValuesSchema />

      <div
        className={styles.footer}
      >
        <ul
          className={styles.ul}
        >
          {Object.keys(footerObject).map((key) => {
            return (
              <li
                className={styles.li}
                key={`value_${key}`}
              >
                <Bold
                  classNames={[
                    'text-[20px] lg:text-[32px]',
                  ]}
                  mb={8}
                >{footerObject[key].title}</Bold>
                <Medium
                  classNames={[
                    'text-[16px] lg:text-[20px]',
                  ]}
                >{footerObject[key].description}</Medium>
                <div
                  className={styles['footer-image-wrapper']}
                >
                  <Image
                    className={styles['footer-images']}
                    src={`/images/company/values/${key}.png`}
                    alt={''}
                    fill
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default BusinessValuesPage;