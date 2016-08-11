import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers'

require('./style.scss');


let store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());



render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
