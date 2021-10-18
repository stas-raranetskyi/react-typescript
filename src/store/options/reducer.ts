import { Actions, IState, OptionsAction } from './types';

const initialState: IState = {
	test: '',
	test1: 0,
};

const reducer = (state = initialState, action: OptionsAction): IState => {
	switch (action.type) {
		case Actions.TEST_ACTION:
			return {
				...state,
				test: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
