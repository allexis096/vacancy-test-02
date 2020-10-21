import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  /* height: 100vh; */
`;

export const DashboardExtract = styled.section`
  color: #fff;
  font-weight: 700;

  h1 {
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }

  background-color: #45b34a;
  opacity: 0.9;
  flex: 1;
`;

export const MainTable = styled.main`
  color: #000;
  background-color: #e5ebe7;
  width: max-content;
  margin: 0 auto 20px;

  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 2px 1px 3px 1px rgba(0, 0, 0, 0.67);

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #000;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 10px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #000;

      &.credit {
        color: #45b34a;
      }

      &.debit {
        color: #ff0000;
      }
    }
  }
`;
