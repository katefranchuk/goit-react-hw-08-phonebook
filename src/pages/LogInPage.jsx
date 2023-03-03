import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { BoxPerPage } from 'styledSystem/Box';

const LogInPage = () => {
  const dispatch = useDispatch();

  const handleLogin = formData => {
    dispatch(logIn(formData));
  };

  return (
    <BoxPerPage display="flex" justifyContent="center" alignItems="center">
      <AuthForm onSubmit={handleLogin} isLoginForm />
    </BoxPerPage>
  );
};

export default LogInPage;
