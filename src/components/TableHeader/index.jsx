import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@blueprintjs/core';

import { ASCENDING } from '../../static/order';
import { sort as sortFunction } from '../../store/reducers/alertsReducer';
import styles from './styles.module.css';


export default function TableHeader({ text, width }) {
  const sort = useSelector(state => state.alerts.sort);
  const dispatch = useDispatch();
  const formatedWidth = width ? `${width}%` : 'auto';
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    setIcon(() => {
      if (sort.field === text.toLowerCase()) {
        return sort.order === ASCENDING ? 'caret-down' : 'caret-up';
      }

      return null;
    });
  }, [sort]);

  function handleClick() {
    const field = text.toLowerCase();
    const alreadySelected = sort.field === field;
    const opositeOrder = sort.order * -1;
    const order = alreadySelected ? opositeOrder : ASCENDING;

    dispatch(sortFunction({field, order}));
  }

  return (
    <div style={{ width: formatedWidth }}>
      <Button
        text={text}
        minimal={true}
        rightIcon={icon}
        className={styles.button}
        onClick={handleClick}
      />
    </div>
  );
}
