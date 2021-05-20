import React, { useEffect } from 'react';
import Test from 'components/Test';
import { useSelector } from 'store';
import { useDispatch } from 'react-redux';
import { testAction } from 'store/options/actions';

const TestContainer: React.FC = () => {

    const { test } = useSelector((state) => state.options);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(testAction('test value from redux'));
    }, [dispatch]);

    return <Test test={test}/>;
};

export default TestContainer;
