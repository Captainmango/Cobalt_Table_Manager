// Normal react imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Boostrap import so components work inside children - stylesheet is also CDN in html
import 'bootstrap/dist/css/bootstrap.min.css';

// Import middleware for async and store management
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

// Create store
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


