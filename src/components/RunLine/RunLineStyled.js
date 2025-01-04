import styled, { keyframes } from 'styled-components';

export const LineWrap = styled.div`
  position: absolute;
  overflow: hidden;
  top: 1000px;
`;
const scrollAnimation = keyframes`
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 100px;
  align-items: center;
  margin: 0;
  list-style: none;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  animation: ${scrollAnimation} 50s linear infinite;

  & li {
    display: inline-block;
  }
`;
