import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  StyledHeader,
  StyledNav,
  Wrap,
  StyledNavLink,
  StyledLogo,
} from './LayoutStyled';
import Logo from '../Logo/Logo';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Wrap>
          <StyledNav>
            <StyledLogo>
              {' '}
              <NavLink to="/">
                <Logo />
              </NavLink>
              go car sharing!
            </StyledLogo>

            <StyledNavLink to={'/'}>HOME</StyledNavLink>
            <StyledNavLink to={'/catalog'}>CAR CATALOG</StyledNavLink>
            <StyledNavLink to={'/favorites'}>fAVORITES</StyledNavLink>
          </StyledNav>
        </Wrap>
      </StyledHeader>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
