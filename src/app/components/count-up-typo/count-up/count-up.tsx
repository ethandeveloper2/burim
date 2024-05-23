'use client'

import { useState, useEffect, useCallback, useRef } from 'react';
import { useCountUp } from 'react-countup';

import boldStyles from '@Components/common/typo/bold/bold.module.css';
import mediumStyles from '@Components/common/typo/medium/medium.module.css';
import regularStyles from '@Components/common/typo/regular/regular.module.css';

const CountUpTypo = ({
  end,
  duration = 3,
  classNames = [],
  typoType,
} : {
  typoType: 'bold' | 'medium' | 'regular';
  end: number;
  duration?: number;
  classNames?: string[];
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);

  // 1회 동작을 위한 flag
  let count = 0;
  
  const { start } = useCountUp({
    ref: ref,
    start: 0,
    end,
    duration,
  });

  const getClassName = useCallback(() => {
    return [
      typoType === 'bold' ? boldStyles.container :  '',
      typoType === 'medium' ? mediumStyles.container :  '',
      typoType === 'regular' ? regularStyles.container :  '',
      ...classNames,
    ].join(' ');
  }, [classNames]);

  const handleScroll = useCallback((entries: any) => {
    if(!count && entries[0].isIntersecting) {
      start();
      count = 1;
    }
  }, []);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(ref.current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll, mounted]);

  return (mounted && (
    <div
      ref={ref}
      className={getClassName()}
    />
  ));
}

export default CountUpTypo;