import React, { Component } from 'react';

import '../Style/App.css';
import List from './List';
import ElemBtn from './elemBtn';
import FormBlock from './FormBlock';

class App extends Component {

    render() {
        return (
                <div className="block">
                    <List/>
                    <ElemBtn/>
                    <FormBlock/>
                </div>
        );
    }
}

export default App;