import { configureStore } from '@reduxjs/toolkit';

import alerts from './reducers/alertsReducer';
import filters from './reducers/filtersReducer';

export default configureStore({
  reducer: { filters, alerts }
});
