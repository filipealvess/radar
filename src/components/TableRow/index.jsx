import React from 'react';

import { Card, Tag } from '@blueprintjs/core';

import styles from './styles.module.css';

function Text({ width, children, bold }) {
  const formatedWidth = width ? `${width}%` : 'auto';
  const fontWeight = bold ? 500 : 400;

  return (
    <p style={{ width: formatedWidth, fontWeight }} className={styles.text}>
      {children}
    </p>
  );
}

export default function TableRow({ data }) {
  const style = { display: data.visible ? 'flex' : 'none' };

  return (
    <Card className={styles.container} style={style}>
      <Text width={25} bold={true}>{data.title}</Text>

      <div style={{ width: '6%', textAlign: 'center' }}>
        <Tag intent={data.severity} />
      </div>

      <div style={{ width: '12%' }}>
        <Tag className={styles.status}>{data.status}</Tag>
      </div>

      <Text width={15}>
        {data.trader.name}
        {data.trader.alerts > 0 && (
          <Tag minimal={true} round={true} className={styles.tag}>
            {`+${data.trader.alerts}`}
          </Tag>
        )}
      </Text>
      <Text width={15}>{data.counterparty}</Text>
      <Text width={12}>{data.book}</Text>
      <Text width={15}>{data.source}</Text>
    </Card>
  );
}
