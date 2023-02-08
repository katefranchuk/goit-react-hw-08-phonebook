import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.spacing(64)};

  @media (min-width: 768px) {
    max-width: ${props => props.theme.spacing(90)};
  }
`;


export const FormLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const FormInput = styled.input`
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: ${props => props.theme.radii.normal};
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.medium};
  height: ${props => props.theme.spacing(7)};
  margin-bottom: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(1)};
  outline: none;

  &::placeholder {
    font-size: ${props => props.theme.fontSizes.small};
  }
`;

export const FormButton = styled.button`
  display: inline-block;
  max-width: 150px;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing(6)};
  padding-block: ${props => props.theme.spacing(1)};
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: ${props => props.theme.radii.normal};
  &:hover {
    box-shadow: ${props => props.theme.shadows.small};
  }
`;
