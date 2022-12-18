export default function sortAlerts(alerts, field, order) {
  const opositeOrder = order * -1;
  const levels = { danger: 1, warning: 2, none: 3 };

  if (field === 'severity') {
    return alerts.sort((alert1, alert2) => {
      const value1 = levels[alert1.severity];
      const value2 = levels[alert2.severity];

      return value1 < value2 ? opositeOrder : order;
    });
  }

  return alerts.sort((alert1, alert2) => {
    const field1 = field === 'trader' ? alert1[field].name : alert1[field];
    const field2 = field === 'trader' ? alert2[field].name : alert2[field];
    const value1 = field1.toLowerCase();
    const value2 = field2.toLowerCase();

    return value1 < value2 ? opositeOrder : order;
  });
}
