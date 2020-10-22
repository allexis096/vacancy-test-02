import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const DashboardStart = styled.section`
  color: #fff;
  font-weight: 700;

  h1 {
    padding: 20px;
    font-size: 30px;
  }

  background-color: #45b34a;
  opacity: 0.9;
  flex: 1;
`;

export const Company = styled.main`
  padding: 20px;
  margin-left: 20px;
  line-height: 40px;
  width: 315px;

  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 2px 1px 3px 1px rgba(0, 0, 0, 0.67);

  p {
    font-size: 24px;
  }

  span {
    display: block;
    margin-top: 15px;
  }

  transition: margin-left 0.4s;
  &:hover {
    margin-left: 25px;
    box-shadow: 5px 3px 3px 1px rgba(0, 0, 0, 0.67);
    cursor: default;
  }
`;
