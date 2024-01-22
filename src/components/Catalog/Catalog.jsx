import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCarsThunk } from '../../redux/operations';
import { selectCars } from '../../redux/selectors';
import { Wrap } from './CatalogStyled';
import Car from './Car';

const Catalog = () => {
  const cars = useSelector(selectCars);
  console.log(cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  return (
    <>
      <Wrap>
        {cars?.map((car, index) => {
          return <Car key={index} car={car} />;
        })}

        {/* <Sorry>Sorry! No cars for your request</Sorry> */}
        <button type="button">Load more</button>
      </Wrap>
    </>
  );
};

export default Catalog;
