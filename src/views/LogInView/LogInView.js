import st from './LogInView.module.css';
export default function LogInView() {
  return (
    <>
      <div className={st.authView}>
        <form
          // onSubmit={ } style={styles.form}
          autoComplete="off"
        >
          <h2> Log In</h2>
          <label className={st.label}>
            Email
            <input
              className={st.input}
              type="email"
              name="email"
              // value={email}
              // onChange={handleChange}
            />
          </label>

          <label className={st.label}>
            Password
            <input
              className={st.input}
              type="password"
              name="password"
              // value={password}
              // onChange={handleChange}
            />
          </label>

          <button className={st.button} type="submit">
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
