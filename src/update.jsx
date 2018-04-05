import React, { Component } from 'react';
import Axios from 'axios';

import Menu from './Menu';
import { css } from 'aphrodite';
import styles from './MenuStyles'; //I did not want to create a file for UserStyle
import { createStore } from 'redux';

function Users(state = [], action) {
    if(action.type === 'LoadData') {
        return action.data;
    }
    return state;
}

const store = createStore(Users);

store.subscribe(() => {
    console.log('subscribe: ', store.getState());
});

Axios.get('http://localhost:5001/users')
    .then(function(res) {
        store.dispatch({ type: 'LoadData', data: res.data });
    });

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            age: '',
            text: '',
            textName: '',
            textAge: ''
        };
        this.submit = this.submit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.ageChange = this.ageChange.bind(this);
        this.onCheck = this.onCheck.bind(this);

    }

    submit(event) {
        if(this.state.name !== '' && this.state.age !== '') {
            let address = 'http://localhost:5001/user/' + this.state.id;
            //console.log(addres);
            Axios.put(address, {
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

    nameChange(event) {
        this.setState({name: event.target.value});
    };

    ageChange(event) {
        this.setState({age: event.target.value});
    };

    onCheck(event) {
        this.setState({ text: event.target.value});
        this.setState({ id: event.target.value});
        let arr = store.getState();
        for(let i = 0; i < arr.length; i++){
            if(event.target.value === arr[i]._id){
                this.setState({ textName: arr[i].name});
                this.setState({ textAge: arr[i].age});
            }
        }
    };

    render() {
        return (
            <div>
                <Menu/>
                <form onSubmit={this.submit}>

                    <span>
                        {this.state.textName} -->
                    </span>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.nameChange}
                    />
                    <br/>
                    <span>
                        {this.state.textAge} -->
                    </span>
                    <input
                        type="text"
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.ageChange}
                    />
                    <br/>
                    <br/>
                    <button>Update</button>
                    <p className={css(styles.paragraf)}>{this.state.text}</p>

                    <div>
                        {store.getState().map((item, index) =>
                            <h4 key={index}> <input type="radio" name="check"  value={item._id} onChange={this.onCheck} /> Name: {item.name} | age: {item.age}</h4>
                        )}
                    </div>
                </form>
            </div>
        );
    }
}

export default Update;