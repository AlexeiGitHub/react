import React, { Component } from 'react';

import Menu from './Menu';
import Header from './Header';

let data = [
    {
        name: 'default',
        age: '11'
    },
    {
        name: 'default1',
        age: '12'
    },
    {
        name: 'default2',
        age: '131'
    },
];

class Users extends Component {

    render() {
        return (
          <div>
              <Menu />
              <Header items={data} />
          </div>
        );
    }
}

export default Users;
