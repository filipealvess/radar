import React from 'react';

import { InputGroup } from '@blueprintjs/core';

import properties from '../../static/properties';
import Property from '../Property';
import styles from './styles.module.css';

export default function Menu() {
  return (
    <>
      <InputGroup
        large={true}
        leftIcon="filter"
        placeholder="Find Properties..."
        className={styles.input}
      />

      <article>
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </article>
    </>
  );
}
