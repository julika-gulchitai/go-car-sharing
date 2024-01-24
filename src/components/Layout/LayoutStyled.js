import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 105px;
  background: linear-gradient(#0b44cd, #ffe4c4);
  display: flex;
  padding: 20px;
  padding-right: 40px;
`;
export const StyledNav = styled.nav`
  width: 1280px;
  align-items: center;
  gap: 50px;
  display: flex;
  justify-content: space-around;
`;

export const Wrap = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  /* font-family: Manrope; */
  font-size: 25px;
  font-style: normal;
  color: #01796f;
  max-width: 1280px;
`;
export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  display: flex;
  color: var(--white);
  text-decoration: none;
  font-weight: 700;
  padding: 10px 20px;
  &:activ {
    color: var(--white);
  }
`;
export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  align-items: center;
`;
