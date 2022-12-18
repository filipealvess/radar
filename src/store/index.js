import { configureStore } from '@reduxjs/toolkit';

import alerts from './reducers/alertsReducer';

export default configureStore({
  reducer: { alerts }
});
