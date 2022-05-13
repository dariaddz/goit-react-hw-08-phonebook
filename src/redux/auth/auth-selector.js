const getIsLoggedIn = state => state.auth.isLoggedIn;
// получаем данные, залогинен ли пользователь

const getUsername = state => state.auth.user.name;
// получаем  имя пользователя

const getIsFetchingUser = state => state.isFetchingUser;
// получаем данные, пошел ли запрос за пользователем

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingUser,
};
export default authSelectors;
