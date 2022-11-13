import axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://636501cef711cb49d1f26be6.mockapi.io'

// fetchContacts "contacts/fetchAll"
// addContact "contacts/addContact"
// deleteContact "contacts/deleteContact"

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );


  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", contact);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );