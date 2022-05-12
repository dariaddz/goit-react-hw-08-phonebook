import AuthNav from 'redux/AuthNav/AuthNav';
import { NavLink } from 'react-router-dom';
import st from './NavBar.module.css';
export default function Navbar() {
  return (
    <div className={st.navBar}>
      <NavLink className={st.link} to="/">
        <button type="button" className={st.navLink}>
          Home
        </button>
      </NavLink>
      <h1 className={st.pageHead}>Phonebook</h1>
      <div className={st.login}>
        <AuthNav />

        <NavLink className={st.link} to="/">
          <button type="button" className={st.navLink}>
            Log Out
          </button>
        </NavLink>
      </div>
    </div>
  );
}
