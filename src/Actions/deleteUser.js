import Axios from 'axios';

export const deleteUser = (event) => dispatch => {

    let id = event.target.getAttribute('name');
    let address = 'http://localhost:5001/user/' + id;

    Axios.delete(address)
        .then((res) => {
            //this.props.onDeleteUser(id);
            dispatch({type: 'DELETE_USER', data: id})
        })
        .catch((err) => {
            console.log(err);
        });

};