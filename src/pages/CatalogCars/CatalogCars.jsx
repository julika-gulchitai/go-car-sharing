import Modal from '../../components/Modal/Modal';
import Catalog from '../../components/Catalog/Catalog';
import { WrapDiv } from './CatalogCarsStyled';

const CatalogCars = () => {
  return (
    <WrapDiv>
      <Catalog />
      {/* <Modal /> */}
    </WrapDiv>
  );
};

export default CatalogCars;
