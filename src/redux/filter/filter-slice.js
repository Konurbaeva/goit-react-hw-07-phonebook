import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   filter: '',
// };
const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    filterContacts: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
    clearFilter: state => {
      return {
        ...state,
        filter: '',
      };
    },
  },
});

export const {  filterContacts, clearFilter } =
filterSlice.actions;
export const filterReducer = filterSlice.reducer;
