import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import './App.css';

let arr = [];
let active = '';

class App extends Component {

    onClickBtnAddUser() {

        let btnAddUser = this.btnAddUser;
        let formBlock = this.formBlock;
        let btnCreate = this.btnCreate;

        if(btnAddUser.innerHTML === 'Add User') {

            formBlock.style.visibility = 'visible';
            btnAddUser.innerHTML = 'Close';


        } else if(btnAddUser.innerHTML === 'Delete') {

            let newArr = arr;
            arr = [];
            let elem = document.querySelectorAll('input[type="checkbox"]');
            for(let i = 0; i < newArr.length; i++){
                let address = 'http://localhost:5001/user/' + newArr[i];
                Axios.delete(address)
                    .then(() => {
                        this.props.onDeleteUser(newArr[i]);
                    })
                    .catch((err) => {
                        console.log(err);
                    });

            }

            for(let i = 0; i < elem.length; i++){

                console.log(elem[i].checked = false);

            }

            btnAddUser.innerHTML = 'Add User';

        } else if(btnAddUser.innerHTML === 'Close'){

            formBlock.style.visibility = 'hidden';
            btnAddUser.innerHTML = 'Add User';
            btnCreate.innerHTML = 'Create';

        }

    }

    onClickCreateUser() {

        let btnAddUser = this.btnAddUser;
        let formBlock = this.formBlock;
        let btnCreate = this.btnCreate;

        let name = this.name.value;
        let age = Number(this.age.value);

        if(btnCreate.innerHTML === 'Create' && !isNaN(age)) {
            console.log(age);
            if (name !== '' && age !== '') {

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

            } else {

                alert('One of the fields is empty');

            }

            formBlock.style.visibility = 'hidden';
            btnAddUser.innerHTML = 'Add User';

        } else if (btnCreate.innerHTML === 'Update' && !isNaN(age)) {

            if(name !== '' && age !== '') {
                let address = 'http://localhost:5001/user/' + active;
                Axios.put(address, {
                    name: name,
                    age: age
                })
                    .then((res) => {
                        this.props.onUpdateUser(res.data);
                        btnCreate.innerHTML = 'Create';
                        btnAddUser.innerHTML = 'Add User';
                        this.name.value = '';
                        this.age.value = '';
                        formBlock.style.visibility = 'hidden';


                    })
                    .catch((err) => {
                        console.log(err);
                    });

            } else{

                alert('One of the fields is empty');

            }
        } else {
            alert('Age != Number');
        }
    }

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

        let id = event.target.getAttribute('name');

        let btnAddUser = this.btnAddUser;
        let formBlock = this.formBlock;

        if(event.target.checked) {

            arr.push(id);

        } else if(!event.target.checked) {

            let newArr = [];

            for(let i = 0; i < arr.length; i++){

                if(arr[i] !== id){

                    newArr.push(arr[i]);

                }

            }

            arr = newArr;

        }

        if(arr.length !== 0){

            btnAddUser.innerHTML = 'Delete';
            formBlock.style.visibility = 'hidden';

        } else {

            btnAddUser.innerHTML = 'Add User';

        }

    }

    onClickUpdate(event) {
        active = event.target.getAttribute('name');
        this.btnAddUser.innerHTML = 'Close';
        this.formBlock.style.visibility = 'visible';
        this.btnCreate.innerHTML = 'Update';
    }

    render() {
        return (
            <div className="block">
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
                                    className="span2">
                                    &#9998;
                                </span>
                            </li>
                        </snan>
                    )}
                </ul>
                <span
                    className="spanAddUser"
                    onClick={this.onClickBtnAddUser.bind(this)}
                    ref={(input) => {this.btnAddUser = input}}
                >
                    Add User
                </span>
                <span
                    ref={(input) => {this.formBlock = input}}
                    className="btnAdd"
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
                        ref={(input) => {this.btnCreate = input}}
                        onClick={this.onClickCreateUser.bind(this)}
                        className="spanAddUser"
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
)(App);