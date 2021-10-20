import React, { useState, useEffect } from 'react';
import ContactsForm from './contactsForm/ContactsForm';
import ContactsList from './contactsList/ContactsList';
import Filter from './filter/Filter';
import GlobalStyles from '../styles/globalStyles';

const App = ({contacts}) => {
 
    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
        
    }, [contacts]);

    return (
        <main>
            <GlobalStyles></GlobalStyles>
            <h1>Phonebook</h1>
            <ContactsForm/>
            <Filter />
            <h2>Contacts</h2>
            <ContactsList/>
        </main>
    );
};

export default App;
