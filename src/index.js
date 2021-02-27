import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore} from 'redux';

import AppRouter from './router/AppRouter';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <AppRouter />
    </Provider>
    , document.getElementById("root"));