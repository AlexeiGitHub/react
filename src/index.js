import React from 'react';

import ReactDOM from 'react-dom';


import Users from './Users';
import About from './About';

import { HashRouter, Route } from 'react-router-dom';
ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={Users} />
            <Route path="/About" component={About} />
        </div>
    </HashRouter>,
    document.getElementById('root')
);
