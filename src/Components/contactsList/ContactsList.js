import React from 'react';
import ContactsListItem from '../contactsListItem/ContactsListItem';
import PropTypes from 'prop-types';
import ContactsListContainer from './ContactsListStyled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from '../../redux/filter/filterActions';

const ContactsList = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.contacts.filter);
    const contacts = useSelector(({contacts}) => {
     console.log(contacts);
        return contacts.items.filter(({name}) => name.toLowerCase().includes(filterValue.toLowerCase())
        )
    });
   console.log(contacts);

    return (
        <ContactsListContainer>
            {contacts.length  && contacts.map((contact)=> 
                <ContactsListItem contact={contact}/>
            )}
        </ContactsListContainer>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    removeContactById: PropTypes.func
};

export default ContactsList;

