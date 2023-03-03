const getIsLoggedIn = state => state.user.isLoggedIn;
const getUser = state => state.user.user;
const getIsRefreshingUser = state => state.user.isRefreshingUser;
const getToken = state => state.user.token;

const authSelectors = {
  getIsLoggedIn,
  getUser,
  getIsRefreshingUser,
  getToken,
};

export default authSelectors;
