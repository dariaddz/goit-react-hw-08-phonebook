import st from './WellcomeView.module.css';
// import { NavLink } from 'react-router-dom';
// import RingLoader from 'react-spinners/RingLoader';

export default function WellcomeView() {
  return (
    <div className={st.wellcome}>
      <div className={st.wellcomeMessage}>
        Start to explore on-line Phonebook service today
      </div>
      {/* <div className={st.container}>
        <RingLoader color="var(--dark-accent-color)" size="200px" />
      </div> */}

      {/* //   <div className={st.message}>
    //     <NavLink className={st.link} to="/signup">
    //       <button type="button" className={st.navLink}>
    //         Sign Up
    //       </button>
    //     </NavLink>
    //     if you have an account
    //   </div>
    //   <div className={st.message}>
    //     <NavLink className={st.link} to="/login">
    //       <button className={st.navLink} type="button">
    //         Log In
    //       </button>
    //     </NavLink>
    //     to start
    //   </div> */}
    </div>
  );
}
