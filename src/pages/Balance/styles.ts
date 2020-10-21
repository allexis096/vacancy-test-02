import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const DashboardBalance = styled.section`
  color: #fff;
  font-weight: 700;

  h1 {
    padding: 20px;
    font-size: 30px;
  }

  background-color: #45b34a;
  opacity: 0.9;
  flex: 1;

  span {
    display: block;
    padding: 20px;
    color: #000;
    width: max-content;
    margin: 0 auto;
    text-align: center;
    font-size: 45px;

    background-color: #e5ebe7;

    border: 1px solid #fff;
    border-radius: 5px;
    box-shadow: 2px 1px 3px 1px rgba(0, 0, 0, 0.67);

    transition: margin-left 0.4s;
    &:hover {
      box-shadow: 5px 3px 3px 1px rgba(0, 0, 0, 0.67);
      cursor: default;
    }
  }
`;
