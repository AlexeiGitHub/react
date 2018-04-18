import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import Menu from './Menu';
import List from './List';

let active;

class Update extends Component {

    onCheck(event) {
        active = event.target.value;
    };

    updateUser() {
        let newName = this.newName.value;
        let newAge = this.newAge.value;
        if(newName !== '' && newAge !== '') {
            let address = 'http://localhost:5001/user/' + active;
            Axios.put(address, {
                name: newName,
                age: newAge
            })
                .then((res) => {
                    this.props.onUpdateUser(res.data);
                    this.newName.value = '';
                    this.newAge.value = '';
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
                    <input
                        type="text"
                        placeholder="Name"
                        ref={(input) => {this.newName = input}}
                    />
                    <br/>
                    <input
                        type="text"
                        placeholder="Age"
                        ref={(input) => {this.newAge = input}}
                    />
                    <br/>
                    <br/>
                    <button onClick={this.updateUser.bind(this)}>Update</button>
                    <div>
                        {this.props.store.map((user, index) =>
                            <h4 key={index}> <input type="radio" name="check" value={user._id} onChange={this.onCheck} /> Name: {user.name} | age: {user.age}</h4>
                        )}
                    </div>
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
        onUpdateUser: (user) => {
            dispatch({type: 'UPDATE_USER', data: user});
        }
    })
)(Update);