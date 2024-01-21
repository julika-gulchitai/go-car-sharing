import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink style={{ color: '#010101', size: 20 }} to={'/'}>
            car
          </NavLink>

          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/catalog'}>Catalog</NavLink>
          <NavLink to={'/favorites'}>Favorites</NavLink>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
