import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    width: 340px;
    height: 64px;

    padding: 10px 16px 0px;
    margin-bottom: 28px;

    border: 1px solid #858882;
    border-radius: 10px;
  }

  label {
    position: absolute;

    font-size: 14px;
    color: #858882;

    top: 5px;
    left: 16px;
  }
`;
