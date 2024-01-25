import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCarsThunk } from '../../redux/operations';
import { selectCars, selectIsLoading, selectPage } from '../../redux/selectors';
import { Wrap, ButtonMore } from './CatalogStyled';
import Car from './Car';
import { loadMore } from '../../redux/carsSlice';
import { Loader } from '../Loader/Loader';

const Catalog = () => {
  let page = useSelector(selectPage);
 
  const cars = useSelector(selectCars);

  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const hanleLoadMore = () => {
    dispatch(loadMore());
  };

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAllCarsThunk(1));
    }
  }, [cars, cars.length, dispatch]);

  useEffect(() => {
    if (page > 1) dispatch(getAllCarsThunk(page));
  }, [dispatch, page]);

  return (
    <>
      <Wrap>
        {cars?.map(car => {
          return <Car key={car.id} car={car} />;
        })}
        {page < 3 && (
          <ButtonMore type="button" onClick={hanleLoadMore}>
            Load more
          </ButtonMore>
        )}
        {isLoading && <Loader />}
    
      </Wrap>
    </>
  );
};

export default Catalog;
