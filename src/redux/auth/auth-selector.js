const getIsLoggedIn = state => state.auth.isLoggedIn;
// получаем данные, залогинен ли пользователь
const getUsername = state => state.auth.user.name;
// получаем  имя пользователя
const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;
