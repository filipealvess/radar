import React from 'react';

import { InputGroup, Tag } from '@blueprintjs/core';

import styles from './styles.module.css';

export default function SearchInput() {
  return (
    <InputGroup
      className={styles.container}
      leftIcon="search"
      round={true}
      placeholder="Search for alerts..."
      rightElement={(
        <Tag minimal={true} round={true} className={styles.tag}>
          152
        </Tag>
      )}
    />
  );
}
