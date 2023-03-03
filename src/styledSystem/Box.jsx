import styled from 'styled-components';
import { layout, flexbox, space, grid } from 'styled-system';

export const BoxPerPage = styled('div')(layout, flexbox, space, grid, {
  height: 'calc(100vh - 80px)',
});

export const Box = styled('div')(layout, flexbox, space, grid);
