import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, Navbar, NavbarDivider, NavbarGroup } from '@blueprintjs/core';

import { search } from '../../store/reducers/alertsReducer';
import SearchInput from '../SearchInput';
import styles from './styles.module.css';

export default function Header() {
  const dispatch = useDispatch();

  function handleSearch(value) {
    dispatch(search(value));
  }

  return (
    <Navbar className={styles.container}>
      <NavbarGroup align="left">
        <SearchInput onSearch={handleSearch} />

        <Button
          text="List"
          icon="list"
          minimal={true}
          active={true}
          intent="primary"
          className={styles.button}
        />

        <Button text="Group by Trader" icon="grid-view" minimal={true} />

        <NavbarDivider />

        <Button icon="caret-down" minimal={true} />
      </NavbarGroup>

      <NavbarGroup align="right">
        <Button text="Take Action" disabled={true} />
      </NavbarGroup>
    </Navbar>
  );
}
