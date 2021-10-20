import React from 'react';
import PropTypes from 'prop-types';
import FilterContainer from './FilterStyled';
import { useSelector, useDispatch } from 'react-redux';
import { onFilterChange } from '../../redux/filter/filterActions';

const Filter = () => {
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    const onChange = (e) => dispatch(onFilterChange(e));
    return (
        <FilterContainer>
            <span className="filterText">Find contacts by name</span>
            <input 
                className="filterInput"
                type="text" 
                name="filter"
                value={value}
                onChange={onChange}
            />
        </FilterContainer>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Filter;