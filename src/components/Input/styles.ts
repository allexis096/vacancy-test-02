import styled, { css } from 'styled-components';

interface InputProps {
  hasError: boolean;
}

export const Container = styled.div<InputProps>`
  position: relative;

  input {
    width: 340px;
    height: 64px;

    padding: 10px 16px 0px;
    margin-bottom: 28px;

    border: 1px solid #858882;
    border-radius: 10px;

    ${props =>
      props.hasError &&
      css`
        border: 1px solid #ff3a3a;
      `}
  }

  label {
    position: absolute;

    font-size: 14px;
    color: #858882;

    top: 5px;
    left: 16px;
  }

  span {
    position: absolute;
    bottom: 10px;
    left: 15px;
    font-size: 11px;
    color: #ff3a3a;
  }
`;
