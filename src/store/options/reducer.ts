import { IAction } from '../interfaces';
import { IState } from './interfaces';
import { TEST_ACTION } from './types';

const initialState: IState = {
    test: '',
};

export default (state = initialState, action: IAction) => {
    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                region: action.payload,
            };
        default:
            return state;
    }
};
