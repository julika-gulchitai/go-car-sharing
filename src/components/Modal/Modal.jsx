import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalOpen, selectCar } from '../../redux/selectors';
import { modalOpen } from '../../redux/carsSlice';
import pictCar from '../Catalog/Car';
import { useEffect } from 'react';
import {
  StyledCloseBtn,
  StyledModalText,
  StyledModalBackdrop,
  StyledModalForm,
  StyledTextWrapper,
  StyledCharacteristic,
  StyledAccessories,
  StyledConditionsWrapper,
  StyledModalBtn,
  StyledImg,
  StyledRentalRow,
  StyledRentalConditions,
  StylH,
  StyledMake,
} from './ModalStyled';
import { MdClose } from 'react-icons/md';

const Modal = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();
  const car = useSelector(selectCar);

  const clickBackdrop = e => {
    if (e.target === e.currentTarget) {
      dispatch(modalOpen(false));
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        dispatch(modalOpen(false));
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  const handleClick = () => {
    dispatch(modalOpen(false));
  };
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    isModalOpen && (
      <StyledModalBackdrop onClick={clickBackdrop}>
        <StyledModalForm>
          <StyledCloseBtn
            type="button"
            onClick={() => {
              dispatch(modalOpen(false));
            }}
          >
            <MdClose size={24} />
          </StyledCloseBtn>
          <StyledImg
            src={car?.img || pictCar}
            alt={car?.make}
            width={461}
            height={248}
          />
          <StyledTextWrapper>
            <StyledMake>
              {car?.make}
              <span> {car?.model}</span>, {car?.year}
            </StyledMake>
            <StyledModalText>
              {car?.address.split(',').slice(1).join(' | ')} | Id: {car.id} |
              Year: {car?.year} | Type: {car.type} | Fuel Consumption:{' '}
              {car?.fuelConsumption} | Engine Size: {car.engineSize}
            </StyledModalText>

            <StyledCharacteristic>{car?.description}</StyledCharacteristic>

            <StylH>Accessories and functionalities:</StylH>
            <StyledAccessories>
              <p>{car.functionalities.join(' | ')}</p>
              <p>{car.accessories.join(' | ')}</p>
            </StyledAccessories>

            <StyledConditionsWrapper>
              <StylH>Rental Conditions:</StylH>

              <StyledRentalRow>
                <StyledRentalConditions>
                  Minimum age:{' '}
                  <span>
                    {car?.rentalConditions.split('\n')[0].split(' ')[2]}
                  </span>
                </StyledRentalConditions>
                <StyledRentalConditions>
                  {car?.rentalConditions.split('\n')[1]}
                </StyledRentalConditions>
              </StyledRentalRow>
              <StyledRentalRow>
                <StyledRentalConditions>
                  {car.rentalConditions.split('\n')[2]}
                </StyledRentalConditions>
                <StyledRentalConditions>
                  Mileage: <span>{formatNumber(car.mileage)}</span>
                </StyledRentalConditions>
                <StyledRentalConditions>
                  Price: <span>{car.rentalPrice}</span>
                </StyledRentalConditions>
              </StyledRentalRow>
            </StyledConditionsWrapper>
            <StyledModalBtn
              href="tel:+380730000000"
              onClick={() => handleClick}
            >
              Rental car
            </StyledModalBtn>
          </StyledTextWrapper>
        </StyledModalForm>
      </StyledModalBackdrop>
    )
  );
};
export default Modal;
