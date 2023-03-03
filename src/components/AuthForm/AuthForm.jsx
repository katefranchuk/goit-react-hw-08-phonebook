import { useState } from 'react';
import {
  AuthorizationForm,
  Formtitle,
  TextField,
  FormInput,
  FormLabel,
  FormSpan,
  FormButton,
  LogInLink,
} from './AuthForm.styled';

export const AuthForm = ({ onSubmit, isLoginForm = false }) => {
  const [userData, setUserData] = useState({
    ...(!isLoginForm && { name: '' }),
    email: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value.trim() });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(userData);

    formReset();
  };

  const formReset = () => {
    setUserData({ name: '', email: '', password: '' });
  };

  const { name, email, password } = userData;

  return (
    <AuthorizationForm autoComplete="off" onSubmit={handleFormSubmit}>
      <Formtitle>
        {isLoginForm ? 'Log in to continue' : 'Register to continue'}
      </Formtitle>
      {isLoginForm ? null : (
        <TextField>
          <FormInput
            type="text"
            name="name"
            onChange={handleInput}
            value={name}
            id="name"
            required
          />
          <FormSpan></FormSpan>
          <FormLabel htmlFor="name" value={name}>
            Name
          </FormLabel>
        </TextField>
      )}
      <TextField>
        <FormInput
          required
          onChange={handleInput}
          name="email"
          value={email}
          type="email"
          id="email"
        />
        <FormSpan></FormSpan>
        <FormLabel htmlFor="email" value={email}>
          Email
        </FormLabel>
      </TextField>
      <TextField>
        <FormInput
          type="password"
          required
          onChange={handleInput}
          autocomplete="current-password"
          // minLength={7}
          name="password"
          value={password}
          id="password"
        />
        {/* <FormInput
          required
          onChange={handleInput}
          minLength={7}
          name="password"
          value={password}
          
          id="password"
          // type="password"
        /> */}
        <FormSpan></FormSpan>
        <FormLabel htmlFor="password" value={password}>
          Password
        </FormLabel>
      </TextField>
      <FormButton type="submit">
        {isLoginForm ? 'Log In' : 'Sign In'}
      </FormButton>
      {isLoginForm ? (
        <LogInLink to="/register">Don't have account?</LogInLink>
      ) : (
        <LogInLink to="/login">Already have account?</LogInLink>
      )}
    </AuthorizationForm>
  );
};
