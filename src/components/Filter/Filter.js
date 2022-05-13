import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import st from './Filter.module.css';
import { filterContacts } from 'redux/FilterSlice';
import { useGetContactsQuery } from 'redux/contactsApi';
import { Loader } from 'components/Loader';

const FilterField = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useGetContactsQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  function changeFilter(evt) {
    const value = evt.currentTarget.value;
    dispatch(filterContacts(value));
  }

  return (
    <div className={st.filter}>
      {isFetching && <Loader />}
      {data && data.length !== 0 ? (
        <>
          <label>Find contacts by name </label>
          <input className={st.input} type="text" onChange={changeFilter} />
        </>
      ) : (
        <h5>You don't have saved contacts</h5>
      )}
    </div>
  );
};

FilterField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FilterField;
