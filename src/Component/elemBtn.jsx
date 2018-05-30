import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUserGroup } from '../Actions/deleteUserGroup';


class ElemBtn extends Component {

    render() {
        return (
            <div>
                <span
                    id="btnAdd"
                    className="spanAddUser"
                    onClick={this.props.onDeleteUser}
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
        onDeleteUser: () => {
            dispatch(deleteUserGroup());
        }
    })
)(ElemBtn);