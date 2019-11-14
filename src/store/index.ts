import { combineReducers } from 'redux';
import options from './options/reducer';

const rootReducer = combineReducers({
    options,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
