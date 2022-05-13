import st from './WellcomeView.module.css';
import { Link } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';

export default function WellcomeView() {
  return (
    <div className={st.wellcome}>
      <div className={st.wellcomeMessage}>
        Start to explore on-line Phonebook service today
      </div>
      <div className={st.container}>
        <RingLoader color="var(--dark-accent-color)" size="200px" />

        <div className={st.message}>
          <Link className={st.link} to="/signup">
            Sign up
          </Link>
          to create new account
        </div>
      </div>
    </div>
  );
}
