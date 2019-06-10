import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
//you have to import redux-thunk below and applyMiddleware above
import thunk from 'redux-thunk';

import App from './components/App'
import reducers from './reducers';

//have to create a const store with the below create store function
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  //store has to be inside the provider
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);