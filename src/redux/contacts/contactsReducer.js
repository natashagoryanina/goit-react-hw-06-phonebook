import { createReducer } from '@reduxjs/toolkit';
import { contactsFilter, onFilterChange } from '../filter/filterActions';
import { addContact, removeContactById } from "./contactsActions";

const initialState = {
    contacts: {
        items: [],
        filter: ''
    }
};

const contactsReducer = createReducer(initialState.contacts.items, {
    [addContact]: (state, {payload}) => {
        const isCopy = state.some((item) => 
               item.name.toLowerCase() === payload.name.toLowerCase()
            );
        if(isCopy) {
            alert(`${payload.name} is already in contacts.`);
            return;
        }
        return [...state, payload];
    },
    [removeContactById]: (state, {payload}) => {
        return state.filter(contact => contact.id !== payload);
    },
});

const filterReducer = createReducer(initialState.contacts.filter, {
    [onFilterChange]: (state, {payload}) => {
        const {value} = payload.target;
        return `${value}`;
    }
});

export {contactsReducer, filterReducer};