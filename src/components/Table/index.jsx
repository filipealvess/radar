import React from 'react';
import { useSelector } from 'react-redux';

import { Card } from '@blueprintjs/core';

import SeverityButton from '../SeverityButton';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import styles from './styles.module.css';

export default function Table() {
  const alerts = useSelector(state => state.alerts.values);

  return (
    <section className={styles.container}>
      <Card className={styles.header}>
        <TableHeader text="Title" width={25} />

        <SeverityButton />

        <TableHeader text="Status" width={12} />
        <TableHeader text="Trader" width={15} />
        <TableHeader text="Counterparty" width={15} />
        <TableHeader text="Book" width={12} />
        <TableHeader text="Source" width={15} />
      </Card>

      {alerts.map(alert => (
        <TableRow key={alert.id} data={alert} />
      ))}
    </section>
  );
}
