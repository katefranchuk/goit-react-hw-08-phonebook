import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
  const user = useSelector(authSelectors.getUser);
  const token = useSelector(authSelectors.getToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
  };
};
