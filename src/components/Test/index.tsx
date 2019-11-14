import * as React from 'react';
import { IProps } from './models';

const TestComponent: React.FC<IProps> = (props) => {

    const [value] = React.useState(0);

    return(
        <div>
            Test value state: {value} <br/>
            Test value props: {props.test} <br/>
        </div>
    );
};

export default TestComponent;
