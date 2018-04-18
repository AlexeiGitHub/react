import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import Menu from './Menu';
import List from './List';

class Delete extends Component {

    deleteUser(event) {
        let id = event.target.name;
        console.log(typeof event.target.name);
        let address = 'http://localhost:5001/user/' + id;
        Axios.delete(address)
            .then((res) => {
                this.props.onDeleteUser(id);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    render() {
        return (
            <div>
                <Menu/>
                    <div>
                        {this.props.store.map((user, index) =>
                            <h4 key={index}>
                                <input type="submit" name={user._id}  value='Delete' onClick={this.deleteUser.bind(this)} />
                                   --> Name: {user.name} | age: {user.age}
                            </h4>
                        )}
                    </div>
                <List/>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onDeleteUser: (id) => {
            dispatch({type: 'DELETE_USER', data: id})
        }
    })
)(Delete);