import React from 'react';
import styles from './index.less';

export default props => {
  const { children } = props;
  return (
    <div
      style={{
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
      }}
    >
      <h1 className={styles.title}>master2222--->>></h1>
      {children}
    </div>
  );
};
