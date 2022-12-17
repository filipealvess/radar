import React from 'react';

import SideBar from '../SideBar';
import styles from './styles.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <SideBar />

      <main>
        {/* page content */}
      </main>
    </div>
  );
}
