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
        let isVisible = true;

        filters.forEach((filter, index) => {
          const filterType = filtersValues[index].type;
          const filterOptions = filtersValues[index].options;
          const alertProp = alert[filter].toLowerCase();

          if (filterType === 'list') {
            isVisible = filterOptions.includes(alertProp);
          } else if (filterType === 'term') {
            isVisible = alertProp.includes(filterOptions[0]);
          }
        });

        return { ...alert, visible: isVisible };
      });

      return { values, sort: state.sort };
    },
    sort(state, { payload }) {
      const stateObject = JSON.parse(JSON.stringify(state));
      const { field, order } = payload;
      const values = sortAlerts(stateObject.values, field, order);

      return { values, sort: payload };
    },
    search(state, { payload }) {
      const values = state.values.map((alert) => {
        const title = alert.title.toLowerCase();
        const term = payload.toLowerCase();

        return { ...alert, visible: title.includes(term) };
      });

      return { values, sort: state.sort };
    }
  }
});

export const { filter, sort, search } = alertsSlice.actions;

export default alertsSlice.reducer;
