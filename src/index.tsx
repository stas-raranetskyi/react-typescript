import './static/styles/index.scss';
import './i18n';

import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<App />);
