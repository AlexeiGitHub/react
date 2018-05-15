import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class ElemBtn extends Component {
    onClickBtnAddUser() {

        let btnAddUser = document.querySelectorAll('#btnAdd')[0];
        let formBlock = document.querySelectorAll('#formBlock')[0];
        let createBtn = document.querySelectorAll('#createBtn')[0];

        if(btnAddUser.innerHTML === 'Add User') {

            formBlock.style.visibility = 'visible';
            btnAddUser.innerHTML = 'Close';


        } else if(btnAddUser.innerHTML === 'Delete') {

            let checkbox = document.querySelectorAll('.checkbox');
            let newCkeckbox = [];

            for(let i = 0; i < checkbox.length; i++) {
                if(checkbox[i].checked === true) {
                    newCkeckbox.push(checkbox[i].getAttribute('name'));
                }
            }


            for(let i = 0; i < newCkeckbox.length; i++) {

                let address = 'http://localhost:5001/user/' + newCkeckbox[i];
                Axios.delete(address)
                    .then(() => {
                        this.props.onDeleteUser(newCkeckbox[i]);
                    })
                    .catch((err) => {
                        console.log(err);
                    });

                }


                for(let i = 0; i < checkbox.length; i++){

                    checkbox[i].checked = false;

                }

                btnAddUser.innerHTML = 'Add User';

        } else if(btnAddUser.innerHTML === 'Close'){

            formBlock.style.visibility = 'hidden';
            btnAddUser.innerHTML = 'Add User';
            createBtn.innerHTML = 'Create';

        }

    }

    render() {
        return (
            <div>
                <span
                    id="btnAdd"
                    className="spanAddUser"
                    onClick={this.onClickBtnAddUser.bind(this)}
                >
                    Add User
                </span>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state.data
    }),
    dispatch => ({
        onAddUser: (user) => {
            dispatch({type: 'ADD_USER', data: user});
        },
        onDeleteUser: (id) => {
            dispatch({type: 'DELETE_USER', data: id})
        },
    })
)(ElemBtn);
