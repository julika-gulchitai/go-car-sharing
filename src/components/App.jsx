import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FavoriteCars from '../pages/FavoriteCars/FavoriteCars';
import Home from '../pages/Home/Home';
import Layout from './Layout/Layout';
import NotFound from '../pages/NotFound';
import CatalogCars from '../pages/CatalogCars/CatalogCars';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<CatalogCars />} />
          <Route path="/favorites" element={<FavoriteCars />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
