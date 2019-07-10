import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Home from './page/homePage/Home'
import 'antd-mobile/dist/antd-mobile.css';
import * as serviceWorker from './serviceWorker';

import Router from './Router'
import store from './store/index'
import { Provider } from 'react-redux'
const Apps = (
  <Provider store={store}>
    <Router/>
  </Provider>
)


ReactDOM.render(Apps, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
