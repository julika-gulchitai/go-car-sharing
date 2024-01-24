import Favorites from '../../components/Favorites/Favorites';
import Modal from '../../components/Modal/Modal';
import { WrapDiv } from '../CatalogCars/CatalogCarsStyled';

const FavoriteCars = () => {
  return (
    <WrapDiv>
      <Favorites />
      <Modal />
    </WrapDiv>
  );
};
export default FavoriteCars;
