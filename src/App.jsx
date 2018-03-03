import React, { Component } from 'react';

import Menu from './Menu';

let arr = [
    {
        name: 'dafault User1',
        age: '11'
    },
    {
        name: 'dafault User2',
        age: '33'
    },
    {
        name: 'dafault User3',
        age: '22'
    },
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { users: arr }
    }
    render() {
        return (
            <div>
                <Menu/>
                <div>
                    {this.state.users.map((item, index) =>
                        <h4 key={index}>Name: {item.name} | age: {item.age}</h4>
                    )}
                </div>
            </div>
        );
    }
}

export default App;