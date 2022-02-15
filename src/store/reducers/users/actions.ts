import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'models/IUser';

export const fetchUsers = createAsyncThunk(
	'user/fetchUsers',
	async (_, thunkAPI) => {
		try {
			const response: IUser[] = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3').then((res) => res.json());
			return response;
		} catch (e) {
			return thunkAPI.rejectWithValue('Failure');
		}
	},
);
