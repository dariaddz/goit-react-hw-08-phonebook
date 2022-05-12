const getIsLoggedIn = state => state.auth.isLoggedIn;
// получаем данные, залогинен ли пользователь
const getUsername = state => state.auth.user.name;
// получаем  имяпользователя
const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;
