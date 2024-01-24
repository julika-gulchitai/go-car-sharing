import styled from 'styled-components';

export const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--accent-text);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(5px);
`;
export const StyledModalForm = styled.form`
  width: 541px;
  min-height: 752px;
  background-color: var(--white);
  border-radius: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
`;

export const StyledImg = styled.img`
  width: 461px;
  height: 248px;
  background: var(--modal-img-bg);
  border-radius: 14px;
  margin-bottom: 14px;
`;
export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  outline: transparent;
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
  }
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledMake = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: var(--descr-text);
  margin-bottom: 8px;
  span {
    color: var(--button);
  }
`;

export const StyledModalText = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 12px;
  margin-bottom: 14px;
  line-height: 1.5;
  color: var(--accent-text);
`;

export const StyledCharacteristic = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: var(--descr-text);
  margin-bottom: 24px;
`;

export const StyledAccessories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;
  color: var(--accent-text-tr);
  margin-top: 8px;

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: var(--modal-accent-text);
  }
  p {
    width: 450px;
    color: var(--accent-text);
    font-size: 12px;
    line-height: 1.5;
  }
`;
export const StylH = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  color: var(--main-text);
`;
export const StyledConditionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 461px;
  margin-bottom: 24px;

  h3 {
    font-size: 14px;
    line-height: 1.43;
    color: var(--descr-text);
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 420px;
  }
  li {
    display: flex;
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    background: var(--modal-accent-bg);
    color: var(--modal-accent-text);
    font-size: 12px;
    line-height: 1.5;

    span {
      color: var(--button);
      font-size: 12px;
      line-height: 1.5;
    }
  }
`;

export const StyledModalBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 44px;
  padding: 12px 50px;
  border-radius: 12px;
  background-color: var(--button);
  border: none;
  outline: transparent;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: var(--white);
  &:hover,
  &:focus {
    background-color: var(--accent-button);
  }
`;
export const StyledRentalConditions = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: var(--modal-accent-bg);
  color: #363535;
  span {
    color: var(--button);
  }
`;
export const StyledRentalRow = styled.div`
  display: flex;
  width: 461px;
  height: 32px;
  align-items: flex-start;
  gap: 8px;
`;
