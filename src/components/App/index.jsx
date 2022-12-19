import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filter } from '../../store/reducers/alertsReducer';
import Header from '../Header';
import SideBar from '../SideBar';
import Table from '../Table';
import styles from './styles.module.css';

export default function App() {
  const filters = useSelector(state => state.filters.values);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filter(filters));
  }, [filters]);

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
