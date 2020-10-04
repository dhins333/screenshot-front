import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import store from './store/store';
import AppRouter from './AppRouter';



ReactDOM.render(
  <Provider store = {store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);