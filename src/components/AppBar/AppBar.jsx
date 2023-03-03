import { AuthNav } from 'components/AuthNav/AuthNav';
import { Container } from 'components/Container/Container.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Header, NavigationBox } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Container>
        <NavigationBox>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </NavigationBox>
      </Container>
    </Header>
  );
};
