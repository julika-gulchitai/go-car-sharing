import styled from 'styled-components';

export const StyledLi = styled.li`
  width: 274px;
  height: 382px
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
export const StyledDiv = styled.div`
  display: flex;
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  height: 268px;
  width: 274px;
  object-fit: cover;
  border-radius: 12px;
  border: 0;
  margin-bottom: 12px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(), lightgray 50% / cover no-repeat;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  & span {
    color: var(--button);
  }
`;

export const Text = styled.p`
  color: var(--accent-text);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 28px;
`;
export const ButtonMore = styled.button`
  color: var(--button);
  background: var(--white);
  margin-top: 80px;
  border: 0;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  cursor: pointer;
  &:active,
  :focus {
    color: var(--accent-button);
    background-color: var(--white);
  }
`;
export const StyledFavBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  outline: transparent;
  border: none;
  background-color: transparent;
  fill: transparent;
`;

export const ButtonBig = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  color: var(--white);
  background: var(--button);
  border: 0;
  cursor: pointer;
  &:hover {
    background: var(--accent-button);
  }
`;
export const ButtonSearch = styled.button`
  display: flex;
  display: flex;
padding: 14px 44px;
 color: var(--white)
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border: 0;
  background: var(--button);
  cursor: pointer;
  &:hover {
    background: var(--accent-button);
  }
`;
