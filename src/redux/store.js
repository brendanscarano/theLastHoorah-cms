import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import locationReducer from './location';

const rootReducer = combineReducers({
    form: formReducer,
    location: locationReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;
