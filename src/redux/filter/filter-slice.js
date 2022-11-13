import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
    filters: '',
  };

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
      filterContact(state, action) {
        state.items = action.payload;
      },
    },
  });

  export const { filterContact } = filtersSlice.actions;

  export const filtersReducer = filtersSlice.reducer;