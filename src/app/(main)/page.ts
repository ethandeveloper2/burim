'use client'

import { useEffect } from 'react';

import { language } from '@/app/types/type';
import { useParams, useRouter } from 'next/navigation';

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