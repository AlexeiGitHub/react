import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Users from './Users';
import { css } from 'aphrodite';
import styles from './indexStyle';

import { HashRouter, Route } from 'react-router-dom';


ReactDOM.render(
    <HashRouter>
        <div className={css(styles.container)}>
            <Route exact path="/" component={App} />
            <Route  path="/user" component={Users} />
        </div>
    </HashRouter>,
    document.getElementById('root')
);


