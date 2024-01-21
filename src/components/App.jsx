import Catalog from '../pages/Catalog';
import FavoriteCars from '../pages/FavoriteCars';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="favorites" element={<FavoriteCars />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
export default App;
