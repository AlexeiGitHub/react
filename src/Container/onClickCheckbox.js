export const onClickCheckbox = (event) => {

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

};