import React, { Component } from 'react';
import Axios from 'axios';

import Menu from './Menu';
//import { css } from 'aphrodite';
//import styles from './MenuStyles'; //I did not want to create a file for UserStyle
import { createStore } from 'redux';

function Users(state = [], action) {
    if(action.type === 'LoadData') {
        return action.data;
    }
    return state;
}

const store = createStore(Users);

store.subscribe(() => {
    console.log('subscribe: ', store.getState());
});

Axios.get('http://localhost:5001/users')
    .then(function(res) {
        store.dispatch({ type: 'LoadData', data: res.data });
    });

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.submit = this.submit.bind(this);
    }

    submit(event) {
        if(this.state.name !== '' && this.state.age !== '') {
            let address = 'http://localhost:5001/user/' + event.target.name;
            //console.log(addres);
            Axios.delete(address)
                .then(function (res) {
                    console.log(res);
                    location.reload();
                })
                .catch(function (err) {
                    console.log(err);
                });
        } else{
            let texts = 'One of the fields is empty';
            this.setState({text: texts});
        }
    };

    render() {
        return (
            <div>
                <Menu/>


                    <div>
                        {store.getState().map((item, index) =>
                            <h4 key={index}> <input type="submit" name={item._id}  value='Delete' onClick={this.submit} /> Name: {item.name} | age: {item.age}</h4>
                        )}
                    </div>

            </div>
        );
    }
}

export default Delete;