import React from 'react';

import Menu from '../Menu';
import NavBar from '../NavBar';
import styles from './styles.module.css';

export default function SideBar() {
  return (
    <aside className={styles.container}>
      <NavBar />
      <Menu />
    </aside>
  );
}
