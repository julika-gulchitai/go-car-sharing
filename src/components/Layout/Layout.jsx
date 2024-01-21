import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  <>
    <header>
      <nav>
        <NavLink style={{ color: '#010101', size: 20 }} to={'/'}>
          car
        </NavLink>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/catalog'}>Catalog</NavLink>
        <Layout to={'/favorites'}>FavoriteCars</Layout>
      </nav>
    </header>
    <Outlet />
  </>;
};
export default Layout;
