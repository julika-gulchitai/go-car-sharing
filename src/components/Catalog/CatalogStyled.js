import styled from 'styled-components';

export const StyledLi = styled.li`
  width: 274px;
  height: 382px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
export const StyledDiv = styled.div`
  display: flex;
`;
// export const StyledUl = styled.ul`
//   display: flex;

//   flex-wrap: wrap;
//   row-gap: 29px;
// `;
export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  justify-content: center;
  align-items: center;
`;
export const Sorry = styled.p`
  font-size: 25px;
  margin: 50px auto;
  color: #800000;
`;
export const StyledImg = styled.img`
  height: 268px;
  width: 274px;
  object-fit: cover;
  /* z-index: -1; */
  border-radius: 12px;
  border: 0;
  margin-bottom: 12px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  /* font-family: Manrope; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  & span {
    color: var(--button);
  }
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 28px;
`;
