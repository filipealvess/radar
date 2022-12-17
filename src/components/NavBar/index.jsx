import React from 'react';

import { Alignment, Button, Card, Navbar } from '@blueprintjs/core';

import logo from '../../assets/logo.svg';
import styles from './styles.module.css';

export default function NavBar() {
  return (
    <>
      <Navbar className={styles.navbar}>
        <Navbar.Group align={Alignment.LEFT}>
          <img
            src={logo}
            alt=""
            width={24}
            height={24}
          />

          <Navbar.Heading className={styles.header}>
            RADAR
          </Navbar.Heading>
        </Navbar.Group>

        <Navbar.Group className={styles.buttons} align={Alignment.RIGHT}>
          <Button className="bp4-minimal" icon="user"  />
          <Button className="bp4-minimal" icon="notifications" />
          <Button className="bp4-minimal" icon="help" />
        </Navbar.Group>
      </Navbar>

      <Card className={styles.flags}>
        <Button
          small={true}
          text="Sets"
          icon="chevron-left"
          minimal={true}
          alignText="left"
          className={styles['flags-button']}
        />

        <p className={styles['flags-text']}>OPEN FLAGS</p>
      </Card>
    </>
  );
}
