import { Sorry, StyledHomeLink } from './NotFoundStyled';

const NotFound = () => {
  return (
    <div>
      <StyledHomeLink to={'/'}>
        <Sorry>Go Home</Sorry>
      </StyledHomeLink>
    </div>
  );
};

export default NotFound;
