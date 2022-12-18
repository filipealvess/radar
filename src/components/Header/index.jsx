import React from 'react';

import { Button, Navbar, NavbarDivider, NavbarGroup } from '@blueprintjs/core';

import SearchInput from '../SearchInput';
import styles from './styles.module.css';

export default function Header() {
  return (
    <Navbar className={styles.container}>
      <NavbarGroup align="left">
        <SearchInput />

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
