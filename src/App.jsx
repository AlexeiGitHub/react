import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Axios from 'axios';

import './App.css';
import List from './Component/List';
import ElemBtn from './Component/elemBtn';
import FormBlock from './Component/FormBlock';

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
                return [
                    ...state
                ];

            }

        }

    }

    if (action.type === 'LoadData') {

        return action.db;

    }

    return state;

}

const store = createStore(payload);

Axios.get('http://localhost:5001/users')
    .then(function(res) {
        store.dispatch({ type: 'LoadData', db: res.data });
    });

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="block">

                    <List/>
                    <ElemBtn/>
                    <FormBlock/>

                </div>
            </Provider>
        );
    }
}

export default App;
