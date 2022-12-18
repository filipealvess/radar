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
    sort(state, { payload }) {
      const stateObject = JSON.parse(JSON.stringify(state));
      const { field, order } = payload;
      const values = sortAlerts(stateObject.values, field, order);

      return { values, sort: payload };
    },
    search(state, { payload }) {
      const values = state.values.map((alert) => {
        const title = alert.title.toLowerCase();

        return { ...alert, visible: title.includes(payload) };
      });

      return { values, sort: state.sort };
    }
  }
});

export const { sort, search } = alertsSlice.actions;

export default alertsSlice.reducer;
