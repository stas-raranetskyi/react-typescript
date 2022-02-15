import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'models/IUser';

import { fetchUsers } from './actions';

interface IState {
	users: IUser[];
	loading: boolean;
	error: string;
}

const initialState: IState = {
	users: [],
	loading: false,
	error: '',
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.loading = false;
			state.error = '';
			state.users = action.payload;
		},
		[fetchUsers.pending.type]: (state) => {
			state.loading = true;
		},
		[fetchUsers.rejected.type]: (state,  action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default usersSlice.reducer;
