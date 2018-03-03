import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { css } from 'aphrodite';
import styles from './MenuStyles';

class Menu extends Component {
  render() {
    return (
      <div className={css(styles.block)}>
        <Link className={css(styles.nav)} to="/">List User</Link>
        <Link className={css(styles.nav)} to="/user">Add User</Link>
      </div>
    );
  }
}

export default Menu;
