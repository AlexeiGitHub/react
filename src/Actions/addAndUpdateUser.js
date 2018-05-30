import Axios from 'axios';

export const addAndUpdateUser = () => dispatch => {

    let btnAddUser = document.querySelectorAll('#btnAdd')[0];
    let formBlock = document.querySelectorAll('#formBlock')[0];
    let createBtn = document.querySelectorAll('#createBtn')[0];

    let name = document.querySelectorAll('#name')[0].value;
    let age = Number(document.querySelectorAll('#age')[0].value);

    document.querySelectorAll('#name')[0].value = '';
    document.querySelectorAll('#age')[0].value = '';


    if(createBtn.innerHTML === 'Create' && !isNaN(age)) {

        Axios.post('http://localhost:5001/user', {
            name: name,
            age: age
        })
            .then((res) => {
                dispatch({ type: 'ADD_USER', data: res.data});
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
                dispatch({ type: 'UPDATE_USER', data: res.data});
                createBtn.innerHTML = 'Create';
                btnAddUser.innerHTML = 'Add User';
                formBlock.style.visibility = 'hidden';
            })
            .catch((err) => {
                console.log(err);
            });

    } else {
        alert('Age != Number');
    }

};