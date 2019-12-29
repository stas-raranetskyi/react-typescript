import React, {useEffect, useState} from 'react';
import { IProps } from './types';
import { useStyles } from './styles';

const TestComponent: React.FC<IProps> = (props) => {

    const [value, setValue] = useState<number>(0);
    const classes = useStyles();

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
