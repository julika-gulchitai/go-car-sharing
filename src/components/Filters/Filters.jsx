import {
  WrapFilters,
  FormFilter,
  StyledSelect,
  StyledFilterInput,
  StyledFromInput,
  StyledToInput,
  Sorry,
  libStyle,
} from './FiltersStyled';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import Select, { components } from 'react-select';
import { selectCars, selectFilters, selectSelect } from '../../redux/selectors';
import { useState } from 'react';

const Filters = () => {
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <IoIosArrowUp
            size={18}
            label="Arrow up"
            color={'var(--black-filter)'}
          />
        ) : (
          <IoIosArrowDown
            size={18}
            label="Arrow down"
            color={'var(--black-filter)'}
          />
        )}
      </components.DropdownIndicator>
    );
  };

  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const [make, setMake] = useState('');
  const [price, setPrice] = useState(null);
  const [fromMile, setFromMile] = useState(null);
  const [toMile, setToMile] = useState(null);

  //   const choseSelect = option => {
  //     dispatch(selectSelect(option?.value));
  //   };
  const carMake = [...new Set(cars?.map(car => car?.make))].sort();

  const carPrice = [...new Set(cars?.map(car => car?.rentalPrice))].sort(
    (a, b) => a - b
  );
  const searchFilter = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const carMake = formData.get('make');
    const rentalPrice = formData.get('rentalPrice');
    const fromMileage = formData.get('from');
    const toMileage = formData.get('to');
    setMake(carMake || '');
    setPrice(Number(rentalPrice));
    setFromMile(Number(fromMileage));
    setToMile(Number(toMileage));

    dispatch(selectFilters({ fromMileage, toMileage, carMake, rentalPrice }));
  };
  const carFiltered = cars
    .filter(item => (make ? item.make === make : true))
    .filter(item => (price ? item.rentalPrice === price : true))
    .filter(item => (fromMile ? item.mileage >= fromMile : true))
    .filter(item => (toMile ? item.mileage <= toMile : true));

  return (
    <WrapFilters>
      <FormFilter onSubmit={searchFilter}>
        <StyledSelect>
          <label htmlFor="make">Car brand</label>
          <Select
            name="make"
            options={carMake.map(make => ({
              value: make,
              label: make,
            }))}
            placeholder="Enter the text"
            styles={libStyle}
            onChange={options => dispatch(selectSelect(options?.value))}
            components={{
              DropdownIndicator,
              IndicatorSeparator: () => null,
            }}
          />
        </StyledSelect>
        <StyledSelect>
          <label htmlFor="rentalPrice">Price/ 1 hour</label>
          <Select
            options={carPrice.map(price => ({
              value: price,
              label: price,
            }))}
            placeholder="To $"
            name="rentalPrice"
            styles={libStyle}
            onChange={options => dispatch(selectSelect(options?.value))}
            components={{
              DropdownIndicator,
              IndicatorSeparator: () => null,
            }}
          />
        </StyledSelect>
        <StyledSelect>
          <label>Сar mileage / km</label>

          <StyledFilterInput>
            <StyledFromInput type="number" placeholder="From" name="from" />
            <StyledToInput type="number" placeholder="To" name="to" />

            <button type="submit">Search</button>
          </StyledFilterInput>
        </StyledSelect>
      </FormFilter>

      {carFiltered?.length === 0 && (
        <Sorry>No cars matching your filter request</Sorry>
      )}
    </WrapFilters>
  );
};
export default Filters;
