import { createSelector, createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { contacts: [], filter: '' };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.contacts.filter;
export const selectTotalContacts = (state) => state.contacts.contacts.length;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.trim().toLocaleLowerCase();
    if (!normalizedFilter) return contacts;
    return contacts.filter((contact) =>
      `${contact.name} ${contact.number}`.toLocaleLowerCase().includes(normalizedFilter),
    );
  },
);

export default contactsSlice.reducer;