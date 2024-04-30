import styles from './page.module.css';
import Medium from '@/app/components/common/typo/medium/medium';
import Title3 from '@/app/components/common/typo/title-3/title-3';
import ContactQuickLink from '@/app/components/contact-quick-link/contact-quick-link';
import Regular from '@/app/components/common/typo/regular/regular';
import Image from 'next/image';
import Bold from '@/app/components/common/typo/bold/bold';
import firstImage from '@Public/images/business/clearance/001.png';
import BusinessCard from '@/app/components/business/card/card';
import BusinessAccordion from '@/app/components/business/accordion/accordion';
import ClearanceBusinessScope from '@/app/components/business/business-scope/clearance-business-scope/clearance-business-scope';

const description01 = '수입품에 대한 국내 법규를 사전 검토하여 고객사가 안전하게 물품을 수입할 수 있도록 법규검토(한글표기사항 포함) 및 대안을 제안합니다.'

const CustomsClearancePage = () => {
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
          <Medium
            classNames={[
              'text-[16px] lg:text-[24px]',
              'text-green-1',
            ]}
            align={'center'}
          >Business</Medium>
          <Title3
            classNames={[
              'text-[24px] lg:text-[40px]'
            ]}
            align={'center'}
          >검역통관</Title3>

          <Regular
            classNames={[
              'text-[14px] lg:text-[20px]'
            ]}
            align={'center'}
          >
            검역통관사업부에 오신 것을 환영합니다
            <br />
            본사업부는 크게 두가지 업무로 분류 됩니다
          </Regular>
        </div>
        <div
          className={styles.body}
        >

          <div
            className={styles.first}
          >
            <Image
              className={styles.img}
              src={firstImage}
              alt={''}
            />

            <div>
              <div>
                <Bold
                  classNames={[
                    'text-[px] lg:text-[px]',
                  ]}
                >01 검역업무</Bold>
                <Regular
                  classNames={[
                    'text-[px] lg:text-[px]',
                  ]}
                >{description01}</Regular>
              </div>
              <div>
                <Bold
                  classNames={[
                    'text-[px] lg:text-[px]',
                  ]}
                >02 통관업무</Bold>
                <Regular
                  classNames={[
                    'text-[px] lg:text-[px]',
                  ]}
                >{description01}</Regular>
              </div>
            </div>
          </div>

          {/* 한눈에 보기 */}
          <div
            className={styles.second}
          >
            <Bold
              classNames={[
                'text-[16px] lg:text-[24px]',
              ]}
            >한눈에 보기</Bold>

            <ul
              className={styles.ul}
            >
              <li>
                <BusinessCard />
              </li>
              <li>
                <BusinessCard />
              </li>
              <li>
                <BusinessCard />
              </li>
            {/* 박스 */}
            </ul>
          </div>

          {/* 사업 분야 */}
          <div
            className={styles.third}
          >
            <Bold
              classNames={[
                'text-[16px] lg:text-[24px]',
              ]}
            >사업 분야</Bold>
            <ClearanceBusinessScope />
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

export default CustomsClearancePage;