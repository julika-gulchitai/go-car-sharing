import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: var(--accent-text);
  padding: 50px;
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--white);
    font-size: 60px;
    margin: 10px auto 30px;
    text-align: center;
  }
`;

export const StyledDWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 100vw;
  position: relative;
`;

export const StyledDiv = styled.div`
  color: var(--white);
  position: relative;
  line-height: 2.5;
  font-weight: 600;
  font-size: 18px;

  /* padding: 50px; */
`;

export const StyledText = styled.p`
  color: var(--white);
  text-align: start;
  font-size: 18px;
  margin: 0;
  padding: 0;
  line-height: 2.5;
  font-weight: 600;
  text-align: start;
  width: 500px;
  position: absolute;
  top: 5%;
  left: 10%;
  z-index: 1;
`;
export const StyledHomeImg = styled.img`
  width: 1100px;
  height: 1100;
  object-fit: cover;
  border-radius: 12px;
  border: 0;
  pozition: absolute;
  margin: 0 auto;
`;
