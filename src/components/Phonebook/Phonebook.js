import PhonebookForm from '../PhonebookForm';
import Contacts from '../Contacts';
import FilterField from '../Filter';
import st from './Phonebook.module.css';

export default function Phonebook() {
  return (
    <div className={st.phonebook}>
      <div className={st.form}>
        <h2>Add new contact</h2>
        <PhonebookForm />
      </div>
      <div className={st.contactBlock}>
        <h2>Contacts</h2>
        <FilterField />
        <Contacts />
      </div>
    </div>
  );
}
