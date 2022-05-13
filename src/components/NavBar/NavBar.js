import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selector';
import AuthNav from 'components/AuthNav/AuthNav';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import st from './NavBar.module.css';

export default function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUsername);

  return (
    <div className={st.navBar}>
      <div className={st.navMenu}>
        <NavLink
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
          to="/"
        >
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink
            className={({ isActive }) => (isActive ? st.activeLink : st.link)}
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </div>
      <h1 className={st.pageHead}>{isLoggedIn && 'Phonebook'}</h1>

      <div className={st.login}>
        {isLoggedIn ? (
          <Link className={st.link} to="/">
            <div className={st.logout}>
              <div className={st.circle}></div>
              <p className={st.helloMessage}>Hi, {userName}!</p>
              <button
                type="button"
                onClick={() => dispatch(authOperations.logOut())}
                className={st.navLink}
              >
                Log Out
              </button>
            </div>
          </Link>
        ) : (
          <AuthNav />
        )}
      </div>
    </div>
  );
}
