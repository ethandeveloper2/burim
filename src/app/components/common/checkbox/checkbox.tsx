'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

import styles from './checkbox.module.css';
import checkImage from '@Public/icons/checkbox/check.svg';

const Checkbox = ({
  state,
  setState,
} : {
  state: boolean;
  setState: Function;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <button
      className={`${styles.container} ${state ? styles.checked : styles.unchecked}`}
      onClick={() => {
        setState(!state);
      }}
    >
      <Image
        src={checkImage}
        alt={''}
        width={12}
        height={12}
      />
    </button>
  ));
}

export default Checkbox;