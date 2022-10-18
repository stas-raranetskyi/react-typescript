import { combineReducers, configureStore } from '@reduxjs/toolkit';

import options from './reducers/options';
import users from './reducers/users';

const rootReducer = combineReducers({
	users,
	options,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
