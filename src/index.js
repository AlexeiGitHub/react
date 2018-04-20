import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Axios from 'axios';

import App from './App';

function payload(state = [], action) {
    if (action.type === 'ADD_USER') {
        return [
            ...state,
            action.data
        ];
    }
    if (action.type === 'UPDATE_USER') {
        for(let i = 0; i < state.length; i++){
            if(state[i]._id === action.data._id) {
                state[i] = action.data;
                //console.log(state);
                return [
                    ...state
                ];
            }
        }
    }

    if (action.type === 'DELETE_USER') {
        for(let i = 0; i < state.length; i++){
            if(state[i]._id === action.data) {
                state.splice(i, 1);
                //console.log(state);
                return [
                    ...state
                ];
            }
        }
    }

    if (action.type === 'LoadData') {
        return action.data;
    }

    return state;
}

const store = createStore(payload);

Axios.get('http://localhost:5001/users')
    .then(function(res) {
        store.dispatch({ type: 'LoadData', data: res.data });
    });

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


