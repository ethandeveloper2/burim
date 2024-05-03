'use client'

import { useState, useEffect } from 'react';

import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import useResponsive from '@Hooks/useResponsive';

const CompanyPageTitle = ({
  subTitle,
  mainTitle,
} : {
  subTitle: string;
  mainTitle: string;
}) => {
  const { greaterThanLarge } = useResponsive();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <div>
      <Medium
        classNames={[
          'text-[16px] lg:text-[24px]',
          'text-white',
        ]}
        align={greaterThanLarge ? 'start' : 'center'}
      >{subTitle}</Medium>
      <Bold
        classNames={[
          'text-[24px] lg:text-[59px]',
          'text-white',
        ]}
        align={greaterThanLarge ? 'start' : 'center'}
      >{mainTitle}</Bold>
    </div>
  ));
}

export default CompanyPageTitle;