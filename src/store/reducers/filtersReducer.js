import { createSlice } from '@reduxjs/toolkit';

import list from '../../controllers/propertiesController';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    properties: list().map(property => ({ ...property, visible: true })),
    values: {}
  },
  reducers: {
    addFilter(state, { payload }) {
      const { values } = JSON.parse(JSON.stringify(state));
      const { field, option, type } = payload;
      const alreadyExists = values[field] !== undefined;

      if (alreadyExists) {
        values[field] = {
          type: values[field].type,
          options: [...values[field].options, option]
        };
      } else {
        values[field] = { type, options: [option] };
      }

      return { properties: state.properties, values };
    },
    removeFilter(state, { payload }) {
      const { values } = JSON.parse(JSON.stringify(state));
      const { field, option } = payload;
      const notExists = !values[field];

      if (notExists) return state;

      values[field].options = values[field].options.filter(value => value !== option);

      const optionsAreEmpty = values[field].options.length === 0;

      if (optionsAreEmpty) {
        delete values[field];
      }

      return { properties: state.properties, values };
    },
    replaceOrAddFilter(state, { payload }) {
      const { values } = JSON.parse(JSON.stringify(state));
      const { field, option, type } = payload;
      const alreadyExists = values[field] !== undefined;

      if (alreadyExists) {
        values[field] = { ...values[field], options: [option] };
      } else {
        values[field] = { type, options: [option] };
      }

      return { properties: state.properties, values };
    },
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

export const {
  search,
  addFilter,
  removeFilter,
  replaceOrAddFilter
} = filtersSlice.actions;

export default filtersSlice.reducer;
