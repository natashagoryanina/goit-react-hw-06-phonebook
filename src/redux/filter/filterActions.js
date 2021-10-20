import { createAction } from "@reduxjs/toolkit";

const onFilterChange = createAction('filter/onFilterChange');
const contactsFilter = createAction('filter/contactsFilter');

export {onFilterChange, contactsFilter};