import { useSelector } from 'react-redux';
import { selectFavorItems, selectIsLoading } from '../../redux/selectors';
import { Wrap } from './FavoritesStyled';
import Car from '../Catalog/Car';
import { Loader } from '../Loader/Loader';

const Favorites = () => {
  const favoreCars = useSelector(selectFavorItems);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Wrap>
        {favoreCars?.map(car => {
          return <Car key={car.id} car={car} />;
        })}
        {isLoading && <Loader />}
      </Wrap>
    </>
  );
};
export default Favorites;
