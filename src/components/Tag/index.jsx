import React, { useEffect, useState } from 'react';

import { Icon, Tag as TagComponent } from '@blueprintjs/core';

import styles from './styles.module.css';

export default function Tag({ text, onTurnOn, onTurnOff }) {
  const [isSelected, setIsSelected] = useState(false);
  const [classes, setClasses] = useState([styles.container]);

  function handleClick() {
    if (isSelected) {
      onTurnOff(text.toLowerCase());
    } else {
      onTurnOn(text.toLowerCase());
    }

    setIsSelected(prevState => !prevState);
  }

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
      onClick={handleClick}
    >
      <Icon icon={isSelected ? 'tick' : 'small-cross'} />
      <span className={styles.text}>{text}</span>
    </TagComponent>
  );
}
