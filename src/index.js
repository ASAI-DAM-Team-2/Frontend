import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import './assets/demo/demo.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
