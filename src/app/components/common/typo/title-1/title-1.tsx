import { ReactNode, useCallback } from 'react';

import styles from './title-1.module.css';
import { textAlign, classNames } from '@/app/types/type';

const Title1 = ({
  children,
  classNames = [],
  align = 'start',
  mt,
  mb,
  mr,
  ml,
}: {
  children: ReactNode;
  classNames?: classNames;
  align?: textAlign;
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
})  => {
  const getClassName = useCallback(() => {
    return [
      styles.container,
      ...classNames,
    ].join(' ');
  }, [classNames, align]);

  return (
    <h1
      className={getClassName()}
      style={{
        textAlign: align,
        ...(mt && { marginTop: mt }),
        ...(mb && { marginBottom: mb }),
        ...(ml && { marginLeft: ml }),
        ...(mr && { marginRight: mr }),
      }}
    >{children}</h1>
  );
}

export default Title1;