import st from './LogInView.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

export default function LogInView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };
  return (
    <>
      <div className={st.authView}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <h2> Log In</h2>
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
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
