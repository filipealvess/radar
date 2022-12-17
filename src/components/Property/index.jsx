/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

import { Card, Icon } from '@blueprintjs/core';

import Tag from '../Tag';
import styles from './styles.module.css';

export default function Property({ property }) {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState('chevron-right');

  useEffect(() => {
    const newIcon = isOpen ? 'chevron-down' : 'chevron-right';
    setIcon(newIcon);
  }, [isOpen]);

  return (
    <>
      <Card
        className={styles.container}
        interactive={true}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.title}>{property.name}</span>
        <Icon icon={icon} />
      </Card>

      <section className={isOpen ? styles.tags : styles.hidden}>
        {property.options.map((option, index) => (
          <Tag key={index} text={option} />
        ))}
      </section>
    </>
  );
}
