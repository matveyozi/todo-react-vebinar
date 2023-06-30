import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://648a01645fa58521cab09ddb.mockapi.io/phonebook/v1'



export const fetchContacts = createAsyncThunk(
	"contacts/fetchContacts",
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get("/contacts");
			return data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
export const addContact = createAsyncThunk(
	'contacts/addContacts',
	async (contact, thunkAPI) => {
		try {
			const { data } = await axios.post('/contacts', contact);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (contactId, thunkAPI) => {
		try {
			const { data } = await axios.delete(`/contacts/${contactId}`);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);






