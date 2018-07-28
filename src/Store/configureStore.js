import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from '../reducers';


function configureStore() {

    const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

    return store;
}

export default configureStore();