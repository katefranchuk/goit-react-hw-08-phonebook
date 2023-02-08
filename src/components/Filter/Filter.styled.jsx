import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: inline-block;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const FilterInput = styled.input`
  display: block;
  width: ${props => props.theme.spacing(64)};
  height: ${props => props.theme.spacing(7)};
  margin-bottom: ${props => props.theme.spacing(4)};
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: ${props => props.theme.radii.normal};
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.medium};
  outline: none;

  @media (min-width: 768px) {
    width: ${props => props.theme.spacing(90)};
  }
`;
