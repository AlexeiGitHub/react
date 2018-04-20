import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { css } from 'aphrodite/no-important';
import styles from './AppStyle';

let arr = [];
let active;

class App extends Component {

    over(event) {
        if(event.currentTarget.firstChild.firstChild.nextSibling.checked === true) {
            //event.currentTarget.firstChild.firstChild.nextSibling.nextSibling.nextSibling.style.visibility = 'visible';
        } else {
            event.currentTarget.firstChild.firstChild.nextSibling.nextSibling.nextSibling.style.visibility = 'visible';
            event.currentTarget.firstChild.firstChild.nextSibling.style.visibility = 'visible';
            event.currentTarget.firstChild.firstChild.style.visibility = 'visible';
        }
    }

    out(event) {
        if(event.currentTarget.firstChild.firstChild.nextSibling.checked !== true) {
            event.currentTarget.firstChild.firstChild.style.visibility = 'hidden';
            event.currentTarget.firstChild.firstChild.nextSibling.style.visibility = 'hidden';
            event.currentTarget.firstChild.firstChild.nextSibling.nextSibling.nextSibling.style.visibility = 'hidden';
        } else {
            event.currentTarget.firstChild.firstChild.nextSibling.nextSibling.nextSibling.style.visibility = 'hidden';
        }
    }

    addUserVisible(event) {
        //console.log(arr);
        if(event.currentTarget.innerHTML === 'Add User' || event.currentTarget.innerHTML === 'Close') {
            event.currentTarget.nextSibling.style.visibility = 'visible';
            if (event.currentTarget.innerHTML === 'Close') {
                event.currentTarget.nextSibling.style.visibility = 'hidden';
                event.currentTarget.innerHTML = 'Add User';
                this.Create.innerHTML = 'Create';
            } else {
                event.currentTarget.innerHTML = 'Close';
            }
        } else if(event.currentTarget.innerHTML === 'Delete') {
            let newArr = arr;
            arr = [];
            let elem = document.querySelectorAll('input[type="checkbox"]');
            for(let i = 0; i < newArr.length; i++){
                let address = 'http://localhost:5001/user/' + newArr[i];
                Axios.delete(address)
                    .then((res) => {
                        this.props.onDeleteUser(newArr[i]);
                    })
                    .catch((err) => {
                        console.log(err);
                    });

            }
            for(let i = 0; i < elem.length; i++){
                console.log(elem[i].checked = false);
            }

            event.currentTarget.innerHTML = 'Add User';
        }
    }

    addUser(event) {

        let name = this.name.value;
        let age = this.age.value;

        if(event.target.innerHTML === 'Create') {
            //console.log(event.currentTarget.parentNode);
            if (name !== '' && age !== '') {
                Axios.post('http://localhost:5001/user', {
                    name: name,
                    age: age
                })
                    .then((res) => {
                        //console.log(res.data);
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
            event.currentTarget.parentNode.style.visibility = 'hidden';
            event.currentTarget.parentNode.previousSibling.innerHTML = 'Add User';

        } else if (event.target.innerHTML === 'Update') {
            if(name !== '' && age !== '') {
                let address = 'http://localhost:5001/user/' + active;
                Axios.put(address, {
                    name: name,
                    age: age
                })
                    .then((res) => {
                        this.props.onUpdateUser(res.data);
                        this.Create.innerHTML = 'Create';
                        this.name.value = '';
                        this.age.value = '';

                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else{
                alert('One of the fields is empty');
            }
        }
    }

    userDle(event) {
        let id = event.target.getAttribute('name');
        //console.log(event.target.getAttribute('name'));
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

    delGroup(event) {

        if(event.target.checked) {
            arr.push(event.target.getAttribute('name'));
            console.log('checked - ', arr);
        } else if(!event.target.checked) {
            let newArr = [];
            for(let i = 0; i < arr.length; i++){
                if(arr[i] !== event.target.getAttribute('name')){
                    newArr.push(arr[i]);
                }
            }
            arr = newArr;
            console.log('NO checked - ', arr);
        }
        if(arr.length !== 0){
            this.btn.innerHTML = 'Delete';
            this.text.style.visibility = 'hidden';
            //console.log(this.btn);
        } else {
            this.btn.innerHTML = 'Add User';
        }
    }

    updateUser(event) {
        active = event.target.getAttribute('name');
        this.btn.innerHTML = 'Close';
        this.text.style.visibility = 'visible';
        this.Create.innerHTML = 'Update';
    }

    render() {
        return (
            <div className={css(styles.block)}>
                <ul>
                    {this.props.store.map((user, index) =>
                        <snan
                            key={index}
                            name={user._id}
                            className={css(styles.span)}
                            onMouseOut={this.out.bind(this)}
                            onMouseOver={this.over.bind(this)}>
                            <li className={css(styles.li)} >
                                <span
                                    name={user._id}
                                    className={css(styles.del)}
                                    onClick={this.userDle.bind(this)}
                                >&#10006;</span>
                                <input
                                    onClick={this.delGroup.bind(this)}
                                    name={user._id}
                                    className={css(styles.checkbox)}
                                    type='checkbox'
                                />
                                <span
                                    className={css(styles.refactor)}>
                                    Name: {user.name} | age: {user.age}
                                </span>
                                <span
                                    name={user._id}
                                    onClick={this.updateUser.bind(this)}
                                    className={css(styles.span2)}>
                                    &#9998;
                                </span>
                            </li>
                        </snan>
                    )}
                    <span
                        className={css(styles.spanAddUser)}
                        onClick={this.addUserVisible.bind(this)}
                        ref={(input) => {this.btn = input}}
                    >
                        Add User
                    </span>
                    <span ref={(input) => {this.text = input}} className={css(styles.btnAdd)}>
                        <input type="text" ref={(input) => this.name = input} placeholder="Name"/>
                        <input type="text" ref={(input) => this.age = input} placeholder="Age"/>
                        <span
                            ref={(input) => {this.Create = input}}
                            onClick={this.addUser.bind(this)}
                            className={css(styles.spanAddUser)}>
                            Create
                        </span>
                    </span>
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