import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import store from './store'; // Import the separate store configuration
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Add this line for Bootstrap Icons
// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
    
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
