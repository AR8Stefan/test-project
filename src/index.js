import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import NavComponent from './NavComponent/NavComponent.js';
import Root from './components/root.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers/index';

const store = createStore(RootReducer);

ReactDOM.render(
    <Root />, document.getElementById('root')
);
registerServiceWorker();
