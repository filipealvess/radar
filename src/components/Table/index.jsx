import React from 'react';

import { Button, Card } from '@blueprintjs/core';

import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import styles from './styles.module.css';

export default function Table() {
  // TEMP
  const data = [
    {
      'id': 1,
      'title': 'BUY of $34.0M USD of LOPR on 1/29/15',
      'severity': 'danger',
      'status': 'ESCALATED',
      'trader': {
        name: 'Prasanta Shivakrishnan',
        alerts: 0
      },
      'counterparty': 'Guerra Corporation',
      'book': 'PRHI-Z53',
      'source': 'Bank Trading'
    },
    {
      'id': 2,
      'title': 'SELL of $836K GBP/AUD of GPB/AUD on 1/30/15',
      'severity': 'warning',
      'status': 'OPEN',
      'trader': {
        name: 'Hugo Justice',
        alerts: 0
      },
      'counterparty': 'VSJP-AG1K (Internal)',
      'book': 'HUUS-K31',
      'source': 'Bank Trading'
    },
    {
      'id': 3,
      'title': 'BUY of $2.00M GBP/USD with ERCD International on 1/30/15',
      'severity': 'none',
      'status': 'CLOSED',
      'trader': {
        name: 'Neville Ruben',
        alerts: 25
      },
      'counterparty': 'ERCD International',
      'book': 'NEUB-B31',
      'source': 'Bank Trading'
    }
  ];

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

      {data.map(row => (
        <TableRow key={row.id} data={row} />
      ))}
    </section>
  );
}
