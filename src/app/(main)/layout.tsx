import { ReactNode } from 'react';

import styles from './layout.module.css';

const layout = ({
  children
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <main
      className={styles.container}
    >{children}</main>
  );
}

export default layout;