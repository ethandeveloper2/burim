
import { ReactNode, useCallback } from 'react';

import styles from './title-2.module.css';
import { textAlign, classNames } from '@/app/types/type';

const Title2 = ({
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
    <h2
      className={getClassName()}
      style={{
        textAlign: align,
        ...(mt && { marginTop: mt }),
        ...(mb && { marginBottom: mb }),
        ...(ml && { marginLeft: ml }),
        ...(mr && { marginRight: mr }),
      }}
    >{children}</h2>
  );
}

export default Title2;