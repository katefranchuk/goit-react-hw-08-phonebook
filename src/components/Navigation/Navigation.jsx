import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { NavigatoinMenuList } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavigatoinMenuList>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="contacts">Contacts</NavLink>
        </li>
      )}
    </NavigatoinMenuList>
  );
};
