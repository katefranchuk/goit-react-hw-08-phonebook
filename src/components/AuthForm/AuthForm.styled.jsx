import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthorizationForm = styled.form`
  width: ${({ theme }) => theme.spacing(100)};
  padding: ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const Formtitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  text-align: center;
`;

export const TextField = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
`;

export const FormInput = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.spacing(10)};
  padding-inline: ${({ theme }) => theme.spacing(2)};
  border: none;
  background: none;
  outline: none;

  &:focus ~ label {
    top: -8px;
    color: ${({ theme }) => theme.colors.primary};
  }
  &:focus ~ span::before {
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  top: ${({ value }) => (value ? '-8px' : '50%')};
  left: 8px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.gray};
  pointer-events: none;
  transition: ${({ theme }) => theme.animation.cubicBezier};
`;

export const FormSpan = styled.span`
  ::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.animation.cubicBezier};
  }
`;

export const FormButton = styled.button`
  display: block;
  margin: 0 auto 28px;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.normal};
  outline: none;
  transition: ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const LogInLink = styled(Link)`
  display: block;
  text-align: center;
`;
