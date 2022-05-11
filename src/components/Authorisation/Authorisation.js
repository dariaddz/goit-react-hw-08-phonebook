import st from './Authorisation.module.css';
export default function Authorisation() {
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

        <form
          // onSubmit={ } style={styles.form}
          autoComplete="off"
        >
          <h2> Sign In</h2>
          <label className={st.label}>
            Name
            <input
              className={st.input}
              type="text"
              name="name"
              // value={name}
              // onChange={handleChange}
            />
          </label>

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
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
