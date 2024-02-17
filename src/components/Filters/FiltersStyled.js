import styled from 'styled-components';

export const WrapFilters = styled.section`
  padding: 20px;
  justify-content: center;
`;

export const libStyle = {
  control: styles => ({
    ...styles,
    backgroundColor: 'var(--accent-filter)',
    width: '224px',
    height: '48px',
    border: 'none',
    paddingLeft: '18px',
    paddingRight: '18px',
    paddingTop: '8px',
    paddingBottom: '8px',
    display: 'flex',
    cursor: 'pointer',
    outline: 'none',
    borderRadius: '14px',
    boxShadow: 'none',
  }),
  singleValue: styles => ({
    ...styles,
    color: 'var(--filter-dropdown-text)',
    fontSize: '18px',
  }),
  placeholder: styles => ({
    ...styles,
    color: 'var(--filter-dropdown-text)',
    fontSize: '18px',
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '14px',
    backgroundColor: 'var(--white)',
    overflow: 'hidden',
    color: 'var(--filter-dropdown-text)',
    fontSize: '16px',

    '&::before': {
      background: 'var(--white)',
      content: '""',
      filter: 'blur(50px)',
      position: 'absolute',
      inset: '0%',
      zIndex: '-1',
    },
  }),
  option: (styles, { isFocused, isSelected }) => {
    if (isFocused) {
      return {
        ...styles,
        color: 'var(--accent-text)',
      };
    } else if (isSelected) {
      return {
        ...styles,
        color: 'var(--accent-text)',
      };
    } else {
      return {
        ...styles,
      };
    }
  },
};

export const FormFilter = styled.form`
  display: flex;
  gap: 18px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 20px;
  button {
    width: 136px;
    height: 48px;
    padding: 14px 44px;
    border-radius: 12px;
    background: var(--button);
    border: none;
    outline: transparent;
    margin-left: 18px;
    color: var(--white);

    color: var(--white);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    &:hover,
    &:focus {
      background-color: var(--accent-button);
    }
  }
  label {
    color: var(--accent-filter-text);
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const StyledFilterInput = styled.div`
  display: flex;

  input {
    padding: 14px 24px;
    border-top: none;
    border-bottom: none;
    border-left: none;
    outline: transparent;
    background: var(--accent-filter);
    &::placeholder {
      color: var(--filter-dropdown-text);
      font-size: 18px;
      line-height: 1.11;
    }
  }
`;
export const StyledFromInput = styled.input`
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  width: 160px;
  border-radius: 14px 0px 0px 14px;
`;

export const StyledToInput = styled.input`
  border-radius: 0px 14px 14px 0px;
  border-right: none;
  width: 160px;
`;

export const Sorry = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: var(--black-filter);
`;
