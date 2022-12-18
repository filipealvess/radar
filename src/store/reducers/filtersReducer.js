import { createSlice } from '@reduxjs/toolkit';

import list from '../../controllers/propertiesController';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    properties: list().map(property => ({ ...property, visible: true })),
    values: {}
  },
  reducers: {
    search(state, { payload }) {
      const properties = state.properties.map((property) => {
        const name = property.name.toLowerCase();
        const term = payload.toLowerCase();

        return { ...property, visible: name.includes(term) };
      });

      return { properties, values: state.values };
    }
  }
});

export const { search } = filtersSlice.actions;

export default filtersSlice.reducer;
