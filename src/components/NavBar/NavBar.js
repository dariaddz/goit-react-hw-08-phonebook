import AuthNav from 'components/AuthNav/AuthNav';
import { Link } from 'react-router-dom';
import st from './NavBar.module.css';
export default function Navbar() {
  return (
    <div className={st.navBar}>
      <Link className={st.link} to="/">
        <button type="button" className={st.navLink}>
          Home
        </button>
      </Link>
      <h1 className={st.pageHead}>Phonebook</h1>
      <div className={st.login}>
        <AuthNav />

        <Link className={st.link} to="/">
          <button type="button" className={st.navLink}>
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
}
