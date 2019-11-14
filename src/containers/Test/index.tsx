import * as React from 'react';
import { connect } from 'react-redux';
import Test from '../../components/Test';
import { AppState } from '../../store';
import { testAction } from '../../store/options/actions';
import { IProps } from './models';

class TestContainer extends React.Component<IProps> {

    public componentDidMount() {
        this.props.testAction('test value from redux');
    }

    public render() {
        return <Test test={this.props.test}/>;
    }
}

const mapStateToProps = (state: AppState) => ({
    test: state.options.test,
});

const mapDispatchToProps = {
    testAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);