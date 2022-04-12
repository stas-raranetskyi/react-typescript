import './static/styles/index.scss';

import AppContextProvider from 'contexts/App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { setupStore } from './store';

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore();

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</BrowserRouter>
	</Provider>,
);
