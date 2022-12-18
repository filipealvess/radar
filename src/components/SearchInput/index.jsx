import React, { useState } from 'react';

import { InputGroup, Tag } from '@blueprintjs/core';

import debounce from '../../utils/debounce';
import styles from './styles.module.css';

export default function SearchInput({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  function search(event) {
    const { value } = event.target;

    setInputValue(value);
    onSearch(value);
  }

  const handleChange = debounce(search);

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
      value={inputValue}
      asyncControl={true}
      onChange={handleChange}
    />
  );
}
