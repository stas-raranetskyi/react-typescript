import clsx from 'helpers/clsx';
import React from 'react';

import classes from './TestComponent.module.scss';
import { IProps } from './types';

const TestComponent: React.FC<IProps> = (props) => {

	return(
		<div className={clsx(classes.testClassName)}>
			Some test component with prop `test` = {props.test};
		</div>
	);
};

export default TestComponent;
