import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');
ReactDOM.render(<App />, app);
registerServiceWorker();
