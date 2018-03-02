import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        <Link to="/">Users</Link>

        <Link to="/about">Add user</Link>
      </div>
    );
  }
}

export default Menu;
