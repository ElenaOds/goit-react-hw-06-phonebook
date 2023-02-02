import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: [],
    },
   
    reducers: {
        addContact(state, action) {
            state.contacts = action.payload;    
        },

        delContact(state, action) {  
            const index = state.contacts.findIndex(
                contact => contact.id === action.payload
              );
              state.contacts.splice(index, 1);       
        },
    },
});

export const { addContact, delContact } = contactSlice.actions; 