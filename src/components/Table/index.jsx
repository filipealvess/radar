import React, { useState } from 'react';

import { Button, Card } from '@blueprintjs/core';

import list from '../../controllers/alertsController';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import styles from './styles.module.css';

export default function Table() {
  const [alerts] = useState(list);

  return (
    <section className={styles.container}>
      <Card className={styles.header}>
        <TableHeader text="Title" width={25} />

        <Button
          icon="error"
          rightIcon="caret-down"
          minimal={true}
          className={styles.button}
        />

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
