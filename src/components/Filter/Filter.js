import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import st from './Filter.module.css';
import { filterContacts } from 'redux/FilterSlice';
import { useGetContactsQuery } from 'redux/contactsApi';

const FilterField = () => {
  const dispatch = useDispatch();
  const { data } = useGetContactsQuery();

  function changeFilter(evt) {
    const value = evt.currentTarget.value;
    dispatch(filterContacts(value));
  }

  return (
    <div className={st.filter}>
      {data.length === 0 ? (
        <h5>You don't have saved contacts</h5>
      ) : (
        <>
          <label>Find contacts by name </label>
          <input className={st.input} type="text" onChange={changeFilter} />
        </>
      )}
    </div>
  );
};

FilterField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FilterField;
