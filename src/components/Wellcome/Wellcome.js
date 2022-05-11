import st from './Wellcome.module.css';

export default function Wellcome() {
  return (
    <div className={st.wellcome}>
      <h2>Wellcome to On-line Phonebook </h2>
      <div className={st.message}>
        <button type="button" className={st.navLink}>
          Log In
        </button>
        if you have an account
      </div>
      <div className={st.message}>
        <button type="button" className={st.navLink}>
          Sign In
        </button>{' '}
        to start{' '}
      </div>
    </div>
  );
}
