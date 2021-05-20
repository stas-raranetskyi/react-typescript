import React, {useEffect, useState} from 'react';
import classes from './Test.module.scss';
import { IProps } from './types';

const TestComponent: React.FC<IProps> = (props) => {

	const [value, setValue] = useState<number>(0);

	useEffect(() => {
		setValue(1);
	}, []);

	return(
		<div className={classes.testClassName}>
			Test value state: {value} <br/>
			Test value props: {props.test} <br/>
		</div>
	);
};

export default TestComponent;
