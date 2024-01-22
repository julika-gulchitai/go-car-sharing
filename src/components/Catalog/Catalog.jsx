import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCarsThunk } from '../../redux/operations';
import { selectCars } from '../../redux/selectors';

const Catalog = () => {
  const cars = useSelector(selectCars);
  console.log(cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  return (
    <div>
      {cars.length ? (
        cars.map(item => (
          <li key={item.id}>
            <img src={item.img} width={320} alt={item.type} />
            <p>{item.make}</p>
            <p>{item.years}</p>{' '}
          </li>
        ))
      ) : (
        <p>No cars for your request</p>
      )}
    </div>
  );
};

export default Catalog;
