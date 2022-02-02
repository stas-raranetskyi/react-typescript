import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
	count: number;
}

const initialState: IState = {
	count: 0,
};

export const optionsSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		increment(state) {
			state.count++;
		},
		setCount(state, action: PayloadAction<number>) {
			state.count = action.payload;
		}
	},
});

export default optionsSlice.reducer;
