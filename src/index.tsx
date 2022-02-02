import './static/styles/index.scss';

import AppContextProvider from 'contexts/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { setupStore } from './store';

const store = setupStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppContextProvider><App /></AppContextProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
