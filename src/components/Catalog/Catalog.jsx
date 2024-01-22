import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCarsThunk } from '../../redux/operations';
import { selectCars, selectIsLoading } from '../../redux/selectors';
import { Wrap, ButtonMore } from './CatalogStyled';
import Car from './Car';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const isLogged = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCarsThunk(page));
    setPage(page + 1);
  }, [dispatch, page, isLogged]);

  const cars = useSelector(selectCars);

  const hanleLoadMore = () => {
    setPage(page + 1);
    dispatch(getAllCarsThunk(page));
  };

  return (
    <>
      <Wrap>
        {cars?.map((car, index) => {
          return <Car key={index} car={car} />;
        })}
        <ButtonMore type="button" onClick={hanleLoadMore}>
          Load more
        </ButtonMore>
      </Wrap>
    </>
  );
};

export default Catalog;
