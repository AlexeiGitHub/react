import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class List extends Component {

    onClickDeleteUser(event) {

        let id = event.target.getAttribute('name');
        let address = 'http://localhost:5001/user/' + id;

        Axios.delete(address)
            .then((res) => {
                this.props.onDeleteUser(id);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    onClickCheckbox(event) {

        let btnAddUser = document.querySelectorAll('#btnAdd')[0];
        let formBlock = document.querySelectorAll('#formBlock')[0];
        let checkbox = document.querySelectorAll('.checkbox');

        if(event.target.checked) {

            btnAddUser.innerHTML = 'Delete';
            formBlock.style.visibility = 'hidden';

        } else if(!event.target.checked) {

            let check = false;

            for(let i = 0; i < checkbox.length; i++){
                if(checkbox[i].checked){
                    check = true;
                    break;
                }
            }

            if(check === false) {
                btnAddUser.innerHTML = 'Add User';
            }
        }

    }

    onClickUpdate(event) {
        let btnAddUser = document.querySelectorAll('#btnAdd')[0];
        let formBlock = document.querySelectorAll('#formBlock')[0];
        let createBtn = document.querySelectorAll('#createBtn')[0];

        createBtn.setAttribute('name', event.target.getAttribute('name'));
        btnAddUser.innerHTML = 'Close';
        formBlock.style.visibility = 'visible';
        createBtn.innerHTML = 'Update';
    }

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
                                    onClick={this.onClickDeleteUser.bind(this)}
                                >&#10006;</span>
                                <input
                                    onClick={this.onClickCheckbox.bind(this)}
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
                                    onClick={this.onClickUpdate.bind(this)}
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
        store: state
    }),
    dispatch => ({
        onDeleteUser: (id) => {
            dispatch({type: 'DELETE_USER', data: id})
        },
    })
)(List);