import React, { Component } from 'react';

import Menu from './Menu';
import { css } from 'aphrodite';
import styles from './MenuStyles'; //I did not want to create a file for UserStyle

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            text: ''
        };
        this.submit = this.submit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.ageChange = this.ageChange.bind(this);
    }

    submit(event) {
        event.preventDefault();
        console.log('submit', this.state.name);
        let text = 'User with name ' + this.state.name + ' Can not be added to the database. The database does not exist!';
        this.setState({text: text});
    };

    nameChange(event) {
        this.setState({name: event.target.value});
    };

    ageChange(event) {
        this.setState({age: event.target.value});
    };

    render() {
        return (
            <div>
                <Menu/>
                <form onSubmit={this.submit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.nameChange}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.ageChange}
                    />
                    <button>Save</button>
                    <p className={css(styles.paragraf)}>{this.state.text}</p>
                </form>
            </div>
        );
    }
}

export default Users;















