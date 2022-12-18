import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@blueprintjs/core';

import { ASCENDING } from '../../static/order';
import { sort as sortFunction } from '../../store/reducers/alertsReducer';
import styles from './styles.module.css';

export default function SeverityButton() {
  const sort = useSelector(state => state.alerts.sort);
  const [icon, setIcon] = useState(null);
  const dispatch = useDispatch();

  function handleButtonClick() {
    const alreadySelected = sort.field === 'severity';
    const opositeOrder = sort.order * -1;
    const order = alreadySelected ? opositeOrder : ASCENDING;

    dispatch(sortFunction({ field: 'severity', order }));
  }

  useEffect(() => {
    setIcon(() => {
      if (sort.field !== 'severity') return null;
      return sort.order === ASCENDING ? 'caret-down' : 'caret-up';
    });
  }, [sort]);

  return (
    <Button
      icon="error"
      rightIcon={icon}
      minimal={true}
      className={styles.container}
      onClick={handleButtonClick}
    />
  );
}
