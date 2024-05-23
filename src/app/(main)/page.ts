'use client'

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { language } from '@Types/type';

const Home = () => {
  const { language: languageParam } = useParams<{ language: language }>(); 
  const router = useRouter();

  useEffect(() => {
    if ( !['ko', 'en'].includes(languageParam) ) {
      router.push('/ko');
    }
  }, []);
}

export default Home;