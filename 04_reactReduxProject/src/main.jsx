import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore , combineReducers, applyMiddleware} from 'redux';
import { accountReducer } from './reducers/account.js'
import { bonusReducer } from './reducers/bonus.js'
import { Provider } from 'react-redux';
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger, thunk)
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <App  />
  </Provider>
  </React.StrictMode>,
)
