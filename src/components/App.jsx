import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import FavoriteCars from '../pages/FavoriteCars';
import Home from '../pages/Home';
import Layout from './Layout/Layout';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<FavoriteCars />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
