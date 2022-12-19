import { createSlice } from '@reduxjs/toolkit';

import list from '../../controllers/alertsController';
import { ASCENDING } from '../../static/order';
import sortAlerts from '../../utils/sortAlerts';

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState: {
    values: list().map(alert => ({ ...alert, visible: true })),
    sort: { field: 'title', order: ASCENDING }
  },
  reducers: {
    filter(state, { payload }) {
      const filters = Object.keys(payload);
      const filtersValues = Object.values(payload);

      const values = state.values.map(alert => {
        const isVisible = filters.reduce((visible, filter, index) => {
          const filterType = filtersValues[index].type;
          const filterOptions = filtersValues[index].options;
          const alertProp = alert[filter].toLowerCase();
          const includesInList = filterType === 'list' && filterOptions.includes(alertProp);
          const includesTerm = filterType === 'term' && alertProp.includes(filterOptions[0]);

          return includesInList || includesTerm ? visible : false;
        }, true);

        return { ...alert, visible: isVisible };
      });

      return { values, sort: state.sort };
    },
    sort(state, { payload }) {
      const stateObject = JSON.parse(JSON.stringify(state));
      const { field, order } = payload;
      const values = sortAlerts(stateObject.values, field, order);

      return { values, sort: payload };
    }
  }
});

export const { filter, sort, search } = alertsSlice.actions;

export default alertsSlice.reducer;
