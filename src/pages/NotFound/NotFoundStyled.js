import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHomeLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Sorry = styled.p`
  font-size: 25px;
  margin: 50px auto;
  color: var(--descr-text);
`;
