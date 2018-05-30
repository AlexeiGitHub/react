import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteUser } from "../Actions/deleteUser";
import { onClickCheckbox } from "../Container/onClickCheckbox";
import { onClickUpdate } from "../Container/onClickUpdate";

class List extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.store.map((user, index) =>
                        <snan
                            key={index}
                            name={index}
                            className="span">
                            <li className="li" >
                                <span
                                    name={user._id}
                                    className="del"
                                    onClick={this.props.onClickDeleteUser.bind(this)}
                                >&#10006;</span>
                                <input
                                    onClick={onClickCheckbox.bind(this)}
                                    name={user._id}
                                    className="checkbox"
                                    type='checkbox'
                                />
                                <span
                                    className="refactor">
                                    Name: {user.name} | age: {user.age}
                                </span>
                                <span
                                    name={user._id}
                                    onClick={onClickUpdate.bind(this)}
                                    className="updateBtn">
                                    &#9998;
                                </span>
                            </li>
                        </snan>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state.data
    }),
    dispatch => ({
        onClickDeleteUser: (event) => {
            dispatch(deleteUser(event));
        }
    })
)(List);