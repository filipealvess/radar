import React from 'react';

import Header from '../Header';
import SideBar from '../SideBar';
import Table from '../Table';
import styles from './styles.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <SideBar />

      <main>
        <Header />
        <Table />
      </main>
    </div>
  );
}
