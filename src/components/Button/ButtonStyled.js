import styled from 'styled-components';

export const ButtonBig = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  /* padding: 12px 99px; */
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
