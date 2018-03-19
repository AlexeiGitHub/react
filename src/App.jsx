import React, { Component } from 'react';
import Menu from './Menu';
import Axios from 'axios';
import { createStore } from 'redux';

function Users(state = [], action) {
    if(action.type === 'LoadData') {
        return action.data;
    }
    return state;
}

const store = createStore(Users);

Axios.get('http://localhost:5001/users')
    .then(function(response) {
        store.dispatch({ type: 'LoadData', data: response.data });
    });

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {arr: []};
        store.subscribe(() => {
            this.setState({arr: store.getState()});
        });
    }

    render() {
        return (
            <div>
                <Menu/>
                <div>
                    {store.getState().map((item, index) =>
                        <h4 key={index}>Name: {item.name} | age: {item.age}</h4>
                    )}
                </div>
            </div>
        );
    }
}

export default App;