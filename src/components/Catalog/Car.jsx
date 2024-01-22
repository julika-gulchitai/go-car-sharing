import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCarsThunk } from '../../redux/operations';
import { StyledLi, StyledDiv, StyledImg, Title, Text } from './CatalogStyled';
import { ButtonLearn } from 'components/Button/ButtonLearn';

const Car = ({ car }) => {
  const pictCar = 'https://board.mistaua.com/2018/61997_1_2.jpg';
  const handleClick = {};
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  return (
    <StyledDiv>
      <StyledLi key={car.id}>
        <StyledImg src={car?.img || pictCar} alt={car?.make} />
        <Title>
          <p>
            {car.make} <span>{car.model}</span>, {car.years}
          </p>
          <p>{car.rentalPrice}</p>
        </Title>
        <Text>
          {car?.address.split(',')[1].trim()} |{' '}
          {car?.address.split(',')[2].trim()} | {car?.rentalCompany} |{' '}
          {car?.type} | {car?.model} | {car?.accessories[0]}
        </Text>

        <ButtonLearn handleClick={handleClick} />
      </StyledLi>
    </StyledDiv>
  );
};

export default Car;
