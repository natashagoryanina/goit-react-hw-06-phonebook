import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer, filterReducer} from './contacts/contactsReducer';

const rootReducer = combineReducers({
    items: contactsReducer,
    filter: filterReducer,
});

const store = configureStore({
    reducer: {
        contacts: rootReducer,
    },
});

export default store;