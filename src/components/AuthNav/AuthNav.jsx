import { NavLink } from 'react-router-dom';
import { AuthNavigatoinList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavigatoinList>
      <li>
        <NavLink to="register">Sign In</NavLink>
      </li>
      <li>
        <NavLink to="login">Log In</NavLink>
      </li>
    </AuthNavigatoinList>
  );
};
