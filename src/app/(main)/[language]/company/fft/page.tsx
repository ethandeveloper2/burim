import Image from 'next/image';

import styles from './page.module.css';
import bgImage from '@Public/images/company/fft/001.png';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import Regular from '@Components/common/typo/regular/regular';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import CompanyPageTitle from '@/app/components/company/page-title/page-title';
import FftSchema from '@/app/components/company/fft/fft-schema/fft-schema';

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
                <Medium
                  classNames={[
                    'text-[16px] lg:text-[32px]',
                    'text-white',
                  ]}
                >{explainObject[key]}</Medium>
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