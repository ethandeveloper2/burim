import Image from 'next/image';
import { Fragment } from 'react';

import styles from './page.module.css';
import { language } from '@Types/type';
import bgImage from '@Public/images/company/fft/001.png';
import useTranslate from '@Hooks/useTranslate';
import Medium from '@Components/common/typo/medium/medium';
import CompanyPageTitle from '@Components/company/page-title/page-title';
import FftSchema from '@Components/company/fft/fft-schema/fft-schema';

const FftPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('company.fft', params.language);

  const explainObject = JSON.parse(t('header.explain'));

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

      <FftSchema />
    </div>
  );
}

export default FftPage;