import { createStore, applyMiddleware } from 'redux';

import rootReducer from './ducks';

import { multiClientMiddleware } from 'redux-axios-middleware';
import { hivelabsWebClient } from '../services/webclient';

const middleware = [
    multiClientMiddleware({
        hivelabs: { client: hivelabsWebClient },
    })
];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;