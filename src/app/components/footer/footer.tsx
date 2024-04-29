import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.css';
import footerLogo from '@Public/logos/logo-grey.png';
import Regular from '@Components/common/typo/regular/regular';

const secFirst = '대표  홍길동   ㅣ   사업자 등록 번호  123-4567-890';
const secSecond = '서울특별시 가가동 나나로 111-2 8층';
const secThird = '통신 판매업 신고  제 2014-서울홍홍홍 0291호';
const trdFirst = '고객지원 111-2345';
const trdSecond = '이메일 help@gmail.com';
const trdThird = '평일 09:00 - 17:00 토,일 공휴일 휴무';
const copyRight = 'Copyrightⓒ2023 Data nugget All rights reserved.';

const Footer = () => {
  return (
    <footer
      className={styles.container}
    >
      <div
        className={styles.header}
      >
        <Image
          className={styles.logo}
          src={footerLogo}
          alt={'burim'}
        />

        <div
          className={styles.second}
        >
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{secFirst}</Regular>
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{secSecond}</Regular>
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{secThird}</Regular>
        </div>
        <div
          className={styles.third}
        >
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{trdFirst}</Regular>
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{trdSecond}</Regular>
          <Regular
            classNames={[
              'text-[14px]',
              styles['header-text'],
            ]}
          >{trdThird}</Regular>
        </div>
      </div>

      {/* 분리선 */}
      <div
        className={styles.body}
      />

      <div
        className={styles.footer}
      >
        <div
          className={styles['link-wrapper']}
        >
          <Link
            className={styles.link}
            href={'#'}
          >이용약관</Link>
          <Link
            className={styles.link}
            href={'#'}
          >개인정보처리방침</Link>
        </div>
        <Regular
          classNames={[
            'text-[12px]',
            styles.copyright,
            styles['footer-text'],
          ]}
        >{copyRight}</Regular>
      </div>
    </footer>
  );
}

export default Footer;