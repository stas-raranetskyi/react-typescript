import { IAction } from '../types';
import { IState } from './types';
import { TEST_ACTION } from './types';

const initialState: IState = {
    test: '',
};

const reducer = (state = initialState, action: IAction): IState => {
    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                test: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
