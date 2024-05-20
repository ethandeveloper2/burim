
import { ReactNode, useCallback } from 'react';

import styles from './medium.module.css';
import { textAlign, classNames } from '@/app/types/type';

const Medium = ({
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
  }, [classNames]);

  return (
    <p
      className={getClassName()}
      style={{
        textAlign: align,
        ...(mt && { marginTop: mt }),
        ...(mb && { marginBottom: mb }),
        ...(ml && { marginLeft: ml }),
        ...(mr && { marginRight: mr }),
      }}
    >{children}</p>
  );
}

export default Medium;