import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Test from './containers/Test';

const Index = () => {
    return <h2>Home</h2>;
};

const About = () => {
    return <h2>About</h2>;
};

const Error404 = () => {
    return <h2>Page not found</h2>;
};

const App: React.FC = () => {
    return (
        <div className="App">
            <Link to="/">Index</Link><br />
            <Link to="/about">About</Link><br />
            <Link to="/test">Test</Link>
            <Switch>
                <Route path="/" exact component={Index}/>
                <Route path="/about" exact component={About}/>
                <Route component={Error404}/>
            </Switch>
            <Test />
        </div>
    );
};

export default App;
