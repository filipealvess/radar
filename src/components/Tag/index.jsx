import React, { useEffect, useState } from 'react';

import { Icon, Tag as TagComponent } from '@blueprintjs/core';

import styles from './styles.module.css';

export default function Tag({ text }) {
  const [isSelected, setIsSelected] = useState(false);
  const [classes, setClasses] = useState([styles.container]);

  useEffect(() => {
    const { container, selected } = styles;
    const newClasses = isSelected ? [container, selected] : [container];

    setClasses(newClasses);
  }, [isSelected]);

  return (
    <TagComponent
      large={true}
      interactive={true}
      className={classes}
      onClick={() => setIsSelected(!isSelected)}
    >
      <Icon icon={isSelected ? 'tick' : 'small-cross'} />
      <span className={styles.text}>{text}</span>
    </TagComponent>
  );
}
