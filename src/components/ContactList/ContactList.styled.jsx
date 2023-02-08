import styled from 'styled-components';

export const ContactListEl = styled.ul`
  max-width: ${props => props.theme.spacing(64)};

  @media (min-width: 768px) {
    max-width: ${props => props.theme.spacing(90)};
  }
`;
export const ContactListItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const ContactListButton = styled.button`
  padding-block: ${props => props.theme.spacing(1)};
  padding-inline: ${props => props.theme.spacing(2)};
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: ${props => props.theme.radii.normal};
  &:hover {
    box-shadow: ${props => props.theme.shadows.small};
  }
`;
