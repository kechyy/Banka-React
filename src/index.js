import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import * as Toastr from 'toastr';
import App from './components/App';
import store from './store';
import '../node_modules/toastr/build/toastr.css';
const app = document.querySelector('#app');




Toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-top-center',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
};
render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
