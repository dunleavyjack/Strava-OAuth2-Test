import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import AppRouter from './router/AppRouter';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <AppRouter />
    </Provider>
    , document.getElementById("root"));