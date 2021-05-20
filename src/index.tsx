import AppContextProvider from 'contexts/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducers from './store';

const store = createStore(reducers, composeWithDevTools(
	applyMiddleware(thunk),
));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppContextProvider><App /></AppContextProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
