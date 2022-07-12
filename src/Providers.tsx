import './static/styles/index.scss';

import AppContextProvider from 'contexts/App';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { setupStore } from './store';

const store = setupStore();

const Providers: React.FC<{ children?: React.ReactNode; }> = ({ children }) => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppContextProvider>
					{children}
				</AppContextProvider>
			</BrowserRouter>
		</Provider>
	);
};

export default Providers;
