import TestComponent from 'components/TestComponent';
import Counter from 'containers/Counter';
import Users from 'containers/Users';
import About from 'pages/About';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<div className="App">
			<Link to="/">Home</Link><br />
			<Link to="/about">About</Link><br />
			<Link to="/test">Test</Link>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About/>}/>
				<Route element={<NotFound/>}/>
			</Routes>
			<TestComponent test={'test prop'} />
			<Counter />
			<Users />
		</div>
	);
};

export default App;
