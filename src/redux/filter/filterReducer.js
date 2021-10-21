import { createReducer } from '@reduxjs/toolkit';
import { onFilterChange } from '../filter/filterActions';

const filterReducer = createReducer(null , {
    [onFilterChange]: (state, {payload}) => {
        const {value} = payload.target;
        return `${value}`;
    }
});

export {filterReducer} ;