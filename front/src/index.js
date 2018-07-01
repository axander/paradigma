import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import PhoneListContainer from './components/phones/PhoneListContainer';
import reducers from './reducers';
import thunk from 'redux-thunk'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <PhoneListContainer />
  </Provider>
  , document.querySelector('.container'));
