import Axios from 'axios';

export const deleteUserGroup = () => dispatch => {
   /* setTimeout(() => {
        console.log('OK');
        dispatch({ type: 'addsss', payload: []});
    }, 2000); */

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
                        //this.props.onDeleteUser(newCkeckbox[i]);
                        dispatch({ type: 'DELETE_USER', data: newCkeckbox[i]});
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
};