import Modal from '../../components/Modal/Modal';
import Catalog from '../../components/Catalog/Catalog';
import { WrapDiv } from './CatalogCarsStyled';
import Filters from '../../components/Filters/Filters';

const CatalogCars = () => {
  return (
    <WrapDiv>
      <Filters />
      <Catalog />
      <Modal />
    </WrapDiv>
  );
};

export default CatalogCars;
