import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class FormBlock extends Component {

    onClickCreateUser() {
        let btnAddUser = document.querySelectorAll('#btnAdd')[0];
        let formBlock = document.querySelectorAll('#formBlock')[0];
        let createBtn = document.querySelectorAll('#createBtn')[0];


        let name = this.name.value;
        let age = Number(this.age.value);

        if(createBtn.innerHTML === 'Create' && !isNaN(age)) {

            Axios.post('http://localhost:5001/user', {
                name: name,
                age: age
            })
                .then((res) => {
                    this.props.onAddUser(res.data);
                    this.name.value = '';
                    this.age.value = '';
                })
                .catch((err) => {
                    console.log(err);
                });

            formBlock.style.visibility = 'hidden';
            btnAddUser.innerHTML = 'Add User';

        } else if (createBtn.innerHTML === 'Update' && !isNaN(age)) {

            let address = 'http://localhost:5001/user/' + createBtn.getAttribute('name');
            Axios.put(address, {
                name: name,
                age: age
            })
                .then((res) => {
                    this.props.onUpdateUser(res.data);
                    createBtn.innerHTML = 'Create';
                    btnAddUser.innerHTML = 'Add User';
                    formBlock.style.visibility = 'hidden';
                    this.name.value = '';
                    this.age.value = '';


                })
                .catch((err) => {
                    console.log(err);
                });

        } else {
            alert('Age != Number');
        }

    }

    render() {
        return (
            <div>
                <span
                    className="btnAdd"
                    id="formBlock"
                >
                        <input
                            type="text"
                            ref={(input) => this.name = input}
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            ref={(input) => this.age = input}
                            placeholder="Age"
                        />
                        <span
                            onClick={this.onClickCreateUser.bind(this)}
                            className="spanAddUser"
                            id="createBtn"
                            name=""
                        >
                            Create
                        </span>
                    </span>
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
        },
        onDeleteUser: (id) => {
            dispatch({type: 'DELETE_USER', data: id})
        },
        onUpdateUser: (user) => {
            dispatch({type: 'UPDATE_USER', data: user});
        }
    })
)(FormBlock);
