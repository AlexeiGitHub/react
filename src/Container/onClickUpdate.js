export const onClickUpdate = (event) => {

    let btnAddUser = document.querySelectorAll('#btnAdd')[0];
    let formBlock = document.querySelectorAll('#formBlock')[0];
    let createBtn = document.querySelectorAll('#createBtn')[0];

    createBtn.setAttribute('name', event.target.getAttribute('name'));
    btnAddUser.innerHTML = 'Close';
    formBlock.style.visibility = 'visible';
    createBtn.innerHTML = 'Update';

};