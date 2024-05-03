'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './page.module.css';
import { language } from '@/app/types/type';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import Regular from '@Components/common/typo/regular/regular';
import { useParams, useRouter } from 'next/navigation';

const LanguageHome = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <main
      className={styles.container}
    >
      메인페이지
    </main>
  ));
}

export default LanguageHome;