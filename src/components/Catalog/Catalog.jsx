import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCarsThunk } from '../../redux/operations';
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectPage,
} from '../../redux/selectors';
import { Wrap, ButtonMore } from './CatalogStyled';
import Car from './Car';
import { loadMore } from '../../redux/carsSlice';

const Catalog = () => {
  let page = useSelector(selectPage);
  console.log(page);
  const cars = useSelector(selectCars);
  console.log(cars);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
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
        {isLoading && <h2 color={'var(accent-filter-text)'}>Loading...</h2>}
        {/*  {isError && <h2>Error</h2>} */}
      </Wrap>
    </>
  );
};

export default Catalog;
