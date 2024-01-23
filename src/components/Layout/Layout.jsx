import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  StyledHeader,
  StyledNav,
  Wrap,
  StyledNavLink,
  StyledLogo,
} from './LayoutStyled';
import Logo from 'components/Logo/Logo';

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

            <StyledNavLink to={'/'}>Home</StyledNavLink>
            <StyledNavLink to={'/catalog'}>Car Catalog</StyledNavLink>
            <StyledNavLink to={'/favorites'}>Favorites</StyledNavLink>
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
