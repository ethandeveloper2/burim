'use client'

import { useState, useEffect, ReactNode } from 'react';

import styles from './modal.module.css';

const Modal = ({
  children,
  maxWidth,
  pt,
  pb,
  pr,
  pl,
} : {
  children: ReactNode;
  maxWidth?: number;
  pt?: number,
  pb?: number,
  pr?: number,
  pl?: number,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <div
      className={styles.container}
    >
      <div
        className={styles.modal}
        style={{
          'width': '390px',
          'maxWidth': maxWidth ? maxWidth : '100%',
          'paddingTop': pt ? pt : '10px',
          'paddingBottom': pb ? pb : '10px',
          'paddingLeft': pl ? pl : '10px',
          'paddingRight': pr ? pr : '10px',
        }}
      >{children}</div>
    </div>
  ));
}

export default Modal;