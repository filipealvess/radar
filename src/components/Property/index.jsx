/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Card, Icon } from '@blueprintjs/core';

import { addFilter, removeFilter } from '../../store/reducers/filtersReducer';
import Tag from '../Tag';
import styles from './styles.module.css';

export default function Property({ property: { name, options, visible } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState('chevron-right');
  const [optionsClass, setOptionsClass] = useState(styles.hidden);
  const dispatch = useDispatch();
  const style = { display: visible ? 'flex' : 'none' };

  useEffect(() => {
    const newIcon = isOpen ? 'chevron-down' : 'chevron-right';
    setIcon(newIcon);
  }, [isOpen]);

  useEffect(() => {
    const newClass = (isOpen && visible) ? styles.tags : styles.hidden;

    if (!visible) setIsOpen(false);

    setOptionsClass(newClass);
  }, [isOpen, visible]);

  function handleTagClick(tag, func) {
    const field = name.toLowerCase();
    dispatch(func({ field, option: tag, type: 'list' }));
  }

  return (
    <>
      <Card
        className={styles.container}
        interactive={true}
        onClick={() => setIsOpen(prevState => !prevState)}
        style={style}
      >
        <span className={styles.title}>{name}</span>
        <Icon icon={icon} />
      </Card>

      <section className={optionsClass}>
        {options.map((option, index) => (
          <Tag
            key={index}
            text={option}
            onTurnOn={tag => handleTagClick(tag, addFilter)}
            onTurnOff={tag => handleTagClick(tag, removeFilter)}
          />
        ))}
      </section>
    </>
  );
}
