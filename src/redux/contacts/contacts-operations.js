import axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://636501cef711cb49d1f26be6.mockapi.io'

// https://636501cef711cb49d1f26be6.mockapi.io/contacts
// const instanceContacts = axios.create({
//     baseUrl: 'https://636501cef711cb49d1f26be6.mockapi.io/contacts'
// })

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get("/contacts");

//  JSON.stringify(response.data)
//   return response.data;

return JSON.stringify(response.data)
});
// const fetchContacts = () => async dispatch => {
//   try {
//     const response = await axios.get("/con");
//   } catch (e) {}
// };

// const fetchContacts = () => async dispatch => {
//     try {
//     const data = await instanceContacts.get('/fetchAll')
//     return data
//     } catch (e) {}
//   };

// fetchContacts "contacts/fetchAll"
// addContact "contacts/addContact"
// deleteContact "contacts/deleteContact"
// export const fetchContacts = async() => {
//     const data = await instanceContacts.get('/fetchAll')
//     console.log('fetchContacts data: ', data)
//     return data
// }


// First, create the thunk
// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await baseUrl.fetchById(userId)
//     return response.data
//   }
// )