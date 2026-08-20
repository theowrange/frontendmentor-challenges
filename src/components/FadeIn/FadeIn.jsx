// import React from 'react';
import styles from './FadeIn.module.css';

function FadeIn({ duration = 300, delay = 0, children, ...delegated }) {
  return (
    <div
      className={styles.wrapper}
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}>
      {children}
    </div>
  );
}

export default FadeIn;
