import { Dispatch } from 'redux';

import { Actions } from './types';

export const testAction = (payload = '') => (dispatch: Dispatch): void => {
	dispatch({
		payload,
		type: Actions.TEST_ACTION,
	});
};
