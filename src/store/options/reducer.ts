import { IAction } from '../models';
import { IState } from './models';
import { TEST_ACTION } from './types';

const initialState: IState = {
    test: '',
};

export default (state = initialState, action: IAction): IState => {
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
