import st from './NavBar.module.css';
export default function Navbar() {
  return (
    <div className={st.navBar}>
      <button type="button" className={st.navLink}>
        Home
      </button>
      <h1 className={st.pageHead}>Phonebook</h1>
      <div className={st.login}>
        <button type="button" className={st.navLink}>
          Sign In
        </button>
        <button type="button" className={st.navLink}>
          Log In
        </button>
        <button type="button" className={st.navLink}>
          Log Out
        </button>
      </div>
    </div>
  );
}
