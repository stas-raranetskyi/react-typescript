import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import { optionsSlice } from 'store/reducers/options';

const Counter: React.FC = () => {
	const { count } = useAppSelector((state) => state.options);
	const { increment } = optionsSlice.actions;
	const dispatch = useAppDispatch();
	const handleIncrement = () => dispatch(increment());

	return (
		<div>
			Count: {count} <button onClick={handleIncrement}>increment</button>
		</div>
	);
};

export default Counter;
