import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import st from './PhonebookForm.module.css';

function PhonebookForm() {
  const [addContact, isSuccess] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const [state, setState] = useState({ name: '', number: '' });

  const { name, number } = state;

  const onHandleChange = evt => {
    const { name, value } = evt.currentTarget;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const validationName =
    contacts && contacts.find(contact => contact.name === name);

  const validationNumber =
    contacts && contacts.find(contact => contact.number === number);

  const onHandleSubmit = evt => {
    evt.preventDefault();

    if (validationName) {
      toast.error('You already have this name in your phonebook');
      return;
    }
    if (validationNumber) {
      toast.error('You already have this number in your phonebook');
      return;
    }

    addContact({ name, number });
    isSuccess && toast.success('New contact was added to you phonebook');
    setState({ name: '', number: '' });
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label className={st.label}>
          Name
          <input
            className={st.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onHandleChange}
          />
        </label>
        <label className={st.label}>
          Number
          <input
            className={st.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onHandleChange}
          />
        </label>
        <button className={st.button} type="submit">
          Add Contact
        </button>
      </form>
    </>
  );
}

PhonebookForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default PhonebookForm;
