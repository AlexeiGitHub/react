import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Axios from 'axios';

import App from './Component/App';
import store from './Store/configureStore';

Axios.get('http://localhost:5001/users')
    .then(function(res) {
        store.dispatch({ type: 'LoadData', db: res.data });
    });

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);