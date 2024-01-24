import React from 'react';
import { StyledDiv, StyledSection } from '../../pages/Home/HomeStyled';

const Home = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <h1>Go-car-sharing</h1>
        Go-car-sharing is a company that provides car rental services in
        Ukraine. Here lies the idea of a modern online car rental. No office,
        manager, paper contract. In the app, the user will find a catalog of
        cars of various configurations, which can be filtered by brand, price
        per hour of car rental and the number of kilometers covered by the car
        during its operation (mileage). Also, you can share your car with us.
      </StyledDiv>
    </StyledSection>
  );
};
export default Home;
