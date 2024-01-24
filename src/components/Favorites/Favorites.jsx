import { useSelector } from 'react-redux';
import { selectFavorItems } from '../../redux/selectors';
import { Wrap } from './FavoritesStyled';
import Car from '../Catalog/Car';

const Favorites = () => {
  const favoreCars = useSelector(selectFavorItems);

  return (
    <>
      <Wrap>
        {favoreCars?.map(car => {
          return <Car key={car.id} car={car} />;
        })}
      </Wrap>
    </>
  );
};
export default Favorites;
