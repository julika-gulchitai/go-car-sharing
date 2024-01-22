import { ButtonBig } from './ButtonStyled';

export const ButtonLearn = handleClick => {
  return (
    <ButtonBig type="button" onClick={handleClick}>
      Learn more
    </ButtonBig>
  );
};
