import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { AnyAction, combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import options from './options/reducer';

const rootReducer = combineReducers({
    options,
});

export type AppState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
export type AppDispatch = ThunkDispatch<typeof rootReducer, any, AnyAction>;

export default rootReducer;
