import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import List from './List';
import Menu from './Menu';

class addUser extends Component {

    addUser() {

        let name = this.userName.value;
        let age = this.userAge.value;

        if(name !== '' && age !== '') {
            Axios.post('http://localhost:5001/user', {
                name: name,
                age: age
            })
                .then((res) => {
                    console.log(res.data);
                    this.props.onAddUser(res.data);
                    this.userName.value = '';
                    this.userAge.value = '';
                })
                .catch((err) => {
                    console.log(err);
                });
        } else{
            alert('One of the fields is empty');
        }
    }

    render() {
        return (
            <div>
                <Menu/>
                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        ref={(input) => { this.userName = input}}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        ref={(input) => { this.userAge = input}}
                    />
                    <button onClick={this.addUser.bind(this)}>Add User</button>
                </form>
                <List />
            </div>
        );
    }
}
export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onAddUser: (user) => {
            dispatch({type: 'ADD_USER', data: user});
        }
    })
)(addUser);















