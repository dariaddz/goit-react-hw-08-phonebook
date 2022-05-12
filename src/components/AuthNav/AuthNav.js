import { NavLink } from 'react-router-dom';
import st from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={st.authNav}>
      <NavLink
        className={st.link}
        to="/signup"

        // style={styles.link}
        // activeStyle={styles.activeLink}
      >
        <button type="button" className={st.navLink}>
          Sign Up
        </button>
      </NavLink>
      <NavLink
        className={st.link}
        to="/login"

        // style={styles.link}
        // activeStyle={styles.activeLink}
      >
        <button className={st.navLink} type="button">
          Log In
        </button>
      </NavLink>
    </div>
  );
}
