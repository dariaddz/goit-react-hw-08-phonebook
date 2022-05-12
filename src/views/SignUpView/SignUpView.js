import st from './SignUpView.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

function SignUpView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className={st.authView}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <h2> Sign Up</h2>
          <label className={st.label}>
            Name
            <input
              className={st.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

          <label className={st.label}>
            Email
            <input
              className={st.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className={st.label}>
            Password
            <input
              className={st.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <button className={st.button} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUpView;
