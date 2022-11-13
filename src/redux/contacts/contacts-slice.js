
import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact } from './contacts-operations'


// const initialState = {
//     contacts:  {
//         items: [],
//         isLoading: false,
//         error: null
//     },
//     filter: ""
//   }



const initialState = {
    items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      ],
      error:false,
      isLoading:false,
}  

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState,
    extraReducers: {
          [fetchContacts.pending](state) {
            state.isLoading = true;
          },
          [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            console.log(' state.contacts: ' + state)
            state.items = action.payload;
          },
          [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
          [addContact.fulfilled] (state, action) {
              console.log('addContact action.payload', action.payload)
           state.items =[...state.items, action.payload]
          }
    },
  });
  
  export const contactsReducer = contactsSlice.reducer;