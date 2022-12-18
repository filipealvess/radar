import React from 'react';

import { Button } from '@blueprintjs/core';

import styles from './styles.module.css';

export default function TableHeader({ text, width }) {
  const formatedWidth = width ? `${width}%` : 'auto';

  return (
    <div style={{ width: formatedWidth }}>
      <Button
        text={text}
        minimal={true}
        rightIcon="caret-down"
        className={styles.button}
      />
    </div>
  );
}
