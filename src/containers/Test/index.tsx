import React from 'react';
import { connect } from 'react-redux';
import Test from '../../components/Test';
import { AppState } from '../../store';
import { testAction } from '../../store/options/actions';
import { IProps } from './types';

const TestContainer: React.FC<IProps> = (props) => {

    props.testAction('test value from redux');

    return <Test test={props.test}/>;
};

const mapStateToProps = (state: AppState) => ({
    test: state.options.test,
});

const mapDispatchToProps = {
    testAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
