'use client'

import { useState, useEffect, ChangeEvent, Dispatch, SetStateAction } from 'react';

import styles from './input.module.css';
import Regular from '@Components/common/typo/regular/regular';

const Input = ({
  state,
  setState,
  type = 'text',
  placeholder,
  label,
} : {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  type?: 'email' | 'text';
  placeholder?: string;
  label?: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }

  return (mounted && (
    <div
      className={styles.container}
    >
      {label && (
        <Regular
          classNames={[
            'text-[14px] lg:text-[20px]',
            styles.label,
          ]}
        >{label}</Regular>
      )}

      <input
        className={styles.input}
        type={type}
        value={state}
        placeholder={type === 'email' ? 'example@burimtrade.com' : (placeholder ?? '')}
        onChange={handleChange}
      />
    </div>
  ));
}

export default Input;