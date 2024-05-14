'use client'

import { useState, useEffect, ReactNode } from 'react';

import { buttonBgColor } from '@Types/type';

const BoxButton = ({
  children,
  clickHandler,
  bgColor,
  mt,
  mb,
  mr,
  ml,
  px,
  py,
  full,
  disable = false,
} : {
  children: ReactNode,
  bgColor: buttonBgColor,
  clickHandler?: Function,
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
  px?: number,
  py?: number,
  full?: boolean,
  disable?: boolean,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted && (
    <button
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
        ...(bgColor === 'grey' && { backgroundColor: '#B8B7B7', color: 'white' }),
        ...(bgColor === 'white' && { backgroundColor: 'white', color: 'black' }),
        ...(disable && { backgroundColor: '#B8B7B7', color: 'white' }),
      }}
      disabled={disable}
    >{children}</button>
  ));
}

export default BoxButton;