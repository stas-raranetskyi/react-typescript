import * as React from 'react';
import { IProps } from './models';
import { useStyles } from './styles';

const TestComponent: React.FC<IProps> = (props) => {

    const [value] = React.useState(0);
    const classes = useStyles();

    return(
        <div className={classes.testClassName}>
            Test value state: {value} <br/>
            Test value props: {props.test} <br/>
        </div>
    );
};

export default TestComponent;
