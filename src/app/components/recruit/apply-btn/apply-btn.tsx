'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import styles from './apply-btn.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import Medium from '@Components/common/typo/medium/medium';
import BoxButton from '@Components/common/buttons/box-button/box-button';

const ApplyBtn = ({
  href,
  translateParam,
  disable = false,
} : {
  href: string;
  translateParam: string;
  disable?: boolean;
}) => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate(translateParam, languageParam);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleApply = () => {
    if (window.open && href) {
      window.open(href);
    }
  }

  return (mounted && (
    <div
      className={styles.container}
    >
      <BoxButton
        bgColor={'green'}
        full
        py={14}
        px={24}
        clickHandler={handleApply}
        disable={disable}
      >
        <Medium
          classNames={[
            'text-[18px]',
            'text-white',
          ]}
          align={'center'}
        >{!disable ? t(`body.btn.onGoing`) : t(`body.btn.finished`)}</Medium>
      </BoxButton>
    </div>
  ));
}

export default ApplyBtn;