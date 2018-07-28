import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAndUpdateUser } from '../Actions/addAndUpdateUser';

class FormBlock extends Component {

    render() {
        return (
            <div>
                <span
                    className="btnAdd"
                    id="formBlock"
                >
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            id="age"
                            type="text"
                            placeholder="Age"
                        />
                        <span
                            onClick={this.props.onClickBtn}
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
        store: state.data
    }),
    dispatch => ({
        onClickBtn: () => {
            dispatch(addAndUpdateUser());
        }
    })
)(FormBlock);