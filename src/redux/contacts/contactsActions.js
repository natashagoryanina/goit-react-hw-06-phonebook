import { createAction } from "@reduxjs/toolkit";

const addContact = createAction('contact/addContact');
const removeContactById = createAction('contact/removeContactById');

export {addContact, removeContactById};
