import styled from 'styled-components';

export const Header = styled.header`
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const NavigationBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.spacing(20)};
`;
