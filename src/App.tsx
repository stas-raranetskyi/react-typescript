import Test from 'containers/Test';
import About from 'pages/About';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<div className="App">
			<Link to="/">Home</Link><br />
			<Link to="/about">About</Link><br />
			<Link to="/test">Test</Link>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/about" exact component={About}/>
				<Route component={NotFound}/>
			</Switch>
			<Test />
		</div>
	);
};

export default App;
