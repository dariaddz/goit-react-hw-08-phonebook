import st from './WellcomeView.module.css';
import { NavLink } from 'react-router-dom';

export default function WellcomeView() {
  return (
    <div className={st.wellcome}>
      {/* <h2>Wellcome to On-line Phonebook </h2> */}
      <div className={st.message}>
        <NavLink className={st.link} to="/signup">
          <button type="button" className={st.navLink}>
            Sign Up
          </button>
        </NavLink>
        if you have an account
      </div>
      <div className={st.message}>
        <NavLink className={st.link} to="/login">
          <button className={st.navLink} type="button">
            Log In
          </button>
        </NavLink>
        to start
      </div>
    </div>
  );
}
