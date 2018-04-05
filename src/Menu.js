import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { css } from 'aphrodite';
import styles from './MenuStyles';

class Menu extends Component {

    render() {
        return (
          <div className={css(styles.block)}>
              <Link className={css(styles.nav)} to="/user">Create</Link>
              <Link className={css(styles.nav)} to="/">Read</Link>
              <Link className={css(styles.nav)} to="/up">Update</Link>
              <Link className={css(styles.nav)} to="/del">Delete</Link>
          </div>
        );
    }
}

export default Menu;
