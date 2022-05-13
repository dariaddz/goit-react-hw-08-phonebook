import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import st from './Filter.module.css';
import { filterContacts } from 'redux/FilterSlice';
// import { useGetContactsQuery } from 'redux/contactsApi';

const FilterField = () => {
  const dispatch = useDispatch();
  // const { data: contacts } = useGetContactsQuery();

  function changeFilter(evt) {
    const value = evt.currentTarget.value;
    dispatch(filterContacts(value));
  }

  return (
    <div className={st.filter}>
      <label>Find contacts by name </label>
      <input className={st.input} type="text" onChange={changeFilter} />
      {/* {contacts === {} ? (
        <h3>You dont have contacts saved</h3>
      ) : (
        <>
          {' '}
          <label>Find contacts by name </label>
          <input className={st.input} type="text" onChange={changeFilter} />
        </>
      )} */}
    </div>
  );
};

FilterField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FilterField;
