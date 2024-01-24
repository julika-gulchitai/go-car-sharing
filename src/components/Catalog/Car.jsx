import { useDispatch, useSelector } from 'react-redux';
import {
  StyledLi,
  StyledDiv,
  StyledImg,
  Title,
  Text,
  StyledFavBtn,
  ButtonBig,
} from './CatalogStyled';
import { modalOpen, modalCar, deleteCar, addCar } from '../../redux/carsSlice';

import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  selectFavorItems,
} from '../../redux/selectors';

export const pictCar = 'https://board.mistaua.com/2018/61997_1_2.jpg';

const Car = ({ car }) => {
  const dispatch = useDispatch();
  const favoritesCars = useSelector(selectFavorItems);

  const handleFavorite = car => {
    const isInFavorItems = favoritesCars?.some(fcar => fcar.id === car.id);
    if (isInFavorItems) {
      dispatch(deleteCar(car.id));
    } else {
      dispatch(addCar(car));
    }
  };

  return (
    <StyledDiv>
      <StyledLi key={car.id}>
        <StyledImg src={car?.img || pictCar} alt={car?.make} />
        <StyledFavBtn type="button" onClick={() => handleFavorite(car)}>
          {(favoritesCars?.some(fcar => fcar.id === car.id) && (
            <AiFillHeart color="var(--button)" />
          )) || <AiOutlineHeart color="var(--white)" />}
        </StyledFavBtn>

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

        <ButtonBig
          type="button"
          onClick={() => {
            dispatch(modalOpen(true));
            dispatch(modalCar(car));
          }}
        >
          Learn more
        </ButtonBig>
      </StyledLi>
    </StyledDiv>
  );
};

export default Car;
