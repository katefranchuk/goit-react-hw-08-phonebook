import styled from 'styled-components';
import { space, typography } from 'styled-system';
import { theme } from 'styles';

export const Title = styled('p')(space, typography, {
  color: theme.colors.dark,
});
