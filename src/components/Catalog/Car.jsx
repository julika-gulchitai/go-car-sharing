import { useDispatch } from 'react-redux';
import { StyledLi, StyledDiv, StyledImg, Title, Text } from './CatalogStyled';
import { ButtonLearn } from 'components/Button/ButtonLearn';
import { modalOpen, modalCar } from '../../redux/carsSlice';

// import { AiFillHeart } from 'react-icons/ai';
// import { AiOutlineHeart } from 'react-icons/ai';

export const pictCar = 'https://board.mistaua.com/2018/61997_1_2.jpg';

const Car = ({ car }) => {
  const dispatch = useDispatch();

  const handleClick = car => {
    dispatch(modalOpen(true));
    dispatch(modalCar(car));
  };

  return (
    <StyledDiv>
      <StyledLi key={car.id}>
        <StyledImg src={car?.img || pictCar} alt={car?.make} />
        <Title>
          <p>
            {car.make} <span>{car.model}</span>, {car.year}
          </p>
          <p>{car.rentalPrice}</p>
        </Title>
        <Text>
          {car.address.split(',').slice(1).join(' | ')} | {car?.rentalCompany} |{' '}
          {car?.type} | {car?.model} | {car?.accessories[0]}
        </Text>

        <ButtonLearn onClick={handleClick} />
      </StyledLi>
    </StyledDiv>
  );
};

export default Car;
