import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      ]
}  

export const myValueSlice = createSlice({
  name: 'myValue',
initialState: initialState,
  reducers: {
    addNewContact(state, action) {
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addNewContact, deleteContact } = myValueSlice.actions;

console.log('myValueSlice ', myValueSlice);
console.log('myValueSlice.actions ', myValueSlice.actions);


export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
  },
});
