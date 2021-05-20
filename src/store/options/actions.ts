import { Dispatch } from 'redux';
import { TEST_ACTION } from './types';

export const testAction = (payload: string = '') => (dispatch: Dispatch): void => {
	dispatch({
		payload,
		type: TEST_ACTION,
	});
};
