import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InputGroup } from '@blueprintjs/core';

import { search as searchFunction } from '../../store/reducers/filtersReducer';
import Property from '../Property';
import styles from './styles.module.css';


export default function Menu() {
  const [search, setSearch] = useState('');
  const properties = useSelector(state => state.filters.properties);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { value } = event.target;

    setSearch(value);
    dispatch(searchFunction(value));
  }

  return (
    <>
      <InputGroup
        large={true}
        leftIcon="filter"
        placeholder="Find Properties..."
        className={styles.input}
        value={search}
        onChange={handleChange}
      />

      <article>
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </article>
    </>
  );
}
