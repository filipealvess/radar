import React, { useState } from 'react';

import { InputGroup } from '@blueprintjs/core';

import list from '../../controllers/propertiesController';
import Property from '../Property';
import styles from './styles.module.css';

export default function Menu() {
  const [properties] = useState(list);

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
