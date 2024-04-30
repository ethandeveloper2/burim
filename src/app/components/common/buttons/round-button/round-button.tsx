'use client'

import { useState, useEffect, ReactNode, useCallback } from 'react';

import styles from './round-button.module.css';

const RoundButton = ({
  children,
  bgColor,
  clickHandler,
  mt,
  mb,
  mr,
  ml,
  px,
  py,
  full,
} : {
  children: ReactNode,
  bgColor: 'green' | 'white',
  clickHandler?: Function,
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
  px?: number,
  py?: number,
  full?: boolean,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <button
      className={styles.container}
      onClick={() => {
        if (clickHandler) {
          clickHandler();
        }
      }}
      style={{
        ...(mt && { marginTop: mt }),
        ...(mb && { marginBottom: mb }),
        ...(ml && { marginLeft: ml }),
        ...(mr && { marginRight: mr }),
        ...(py && { paddingTop: py, paddingBottom: py}),
        ...(px && { paddingLeft: px, paddingRight: px}),
        ...(full && { width: '100%' }),
        ...(bgColor === 'green' && { backgroundColor: '#2E6C39', color: 'white' }),
        ...(bgColor === 'white' && { backgroundColor: 'white', color: 'black' }),
      }}
    >{children}</button>
  ));
}

export default RoundButton;