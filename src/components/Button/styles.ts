import styled from 'styled-components';

export const Container = styled.div`
  button {
    width: 340px;
    height: 42px;

    border: none;
    border-radius: 5px;

    margin-top: 16px;

    background-color: #45b54a;
    color: #fff;
    font-weight: 700;

    transition: box-shadow 0.2s;
    transition: background-color 0.2s;

    &:hover {
      box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.2);
      background-color: #4dd153;
    }
  }
`;
