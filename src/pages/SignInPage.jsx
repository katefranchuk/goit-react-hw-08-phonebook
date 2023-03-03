import { useDispatch } from 'react-redux';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { register } from 'redux/auth/authOperations';
import { BoxPerPage } from 'styledSystem/Box';

const SignInPage = () => {
  const dispatch = useDispatch();

  const handleRegister = formData => {
    dispatch(register(formData));
  };
  return (
    <BoxPerPage display="flex" justifyContent="center" alignItems="center">
      <AuthForm onSubmit={handleRegister} />
    </BoxPerPage>
  );
};

export default SignInPage;
