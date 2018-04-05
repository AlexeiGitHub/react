import React, { Component } from 'react';
import Axios from 'axios';

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
        if(this.state.name !== '' && this.state.age !== '') {
            Axios.post('http://localhost:5001/user', {
                name: this.state.name,
                age: this.state.age
            })
                .then(function (res) {
                    console.log(res);
                    location.reload();
                })
                .catch(function (err) {
                    console.log(err);
                });
        } else{
            let texts = 'One of the fields is empty';
            this.setState({text: texts});
        }
    };

    nameChange(event) { //Обработчик Поля name
        this.setState({name: event.target.value});
    };

    ageChange(event) { //Обработчик Поля age
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
                    <button>Create</button>
                    <p className={css(styles.paragraf)}>{this.state.text}</p>
                </form>
            </div>
        );
    }
}

export default Users;















