import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './reducers/todoReducer';
import thunk from 'redux-thunk'

import App from './App';
import './index.css';

const store = configureStore({
  reducer: {
    todoState: todoReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk]
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
