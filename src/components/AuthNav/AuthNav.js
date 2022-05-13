import { NavLink } from 'react-router-dom';
import st from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={st.authNav}>
      <NavLink
        className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        to="/signup"
      >
        Sign Up
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
}
