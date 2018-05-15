import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Axios from 'axios';

import './App.css';
import List from './Component/List';
import ElemBtn from './Component/elemBtn';
import FormBlock from './Component/FormBlock';

import reducer from './reducers';

const store = createStore(reducer);

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
