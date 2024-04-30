import Image from 'next/image';
import Link from 'next/link';

import styles from './contact-quick-link.module.css';
import arrowIcon from '@Public/icons/arrow/right.svg';
import RoundButton from '../common/buttons/round-button/round-button';
import Bold from '../common/typo/bold/bold';
import Regular from '../common/typo/regular/regular';

const ContactQuickLink = () => {

  return (
    <div
      className={styles.container}
    >
      <Image
        className={styles.header}
        src={''}
        alt={''}
        fill
      />

      <div
        className={styles.body}
      >
        <Bold
          classNames={[
            'text-[26px] lg:text-[32px]',
            'text-white',
          ]}
          align={'center'}
        >부림무역이 궁금하시다면? 지금 문의해보세요.</Bold>
        <Link
          href={'/contact'}
        >
          <RoundButton
            bgColor={'white'}
            py={15}
            px={24}
          >
            <div
              className={styles.btn}
            >
              <Regular
                classNames={[
                  'text-[14px] lg:text-[20px]',
                ]}
              >자세히 보러가기</Regular>
              <Image
                src={arrowIcon}
                alt={''}
                width={20}
                height={20}
              />
            </div>
          </RoundButton>
        </Link>
      </div>
    </div>
  );
}

export default ContactQuickLink;