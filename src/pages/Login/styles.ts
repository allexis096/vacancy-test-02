import styled from 'styled-components';

import backgroundLogin from '../../assets/background-login.jpeg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Background = styled.div`
  width: 50vw;
  background: url(${backgroundLogin}) no-repeat center;
  background-size: cover;

  @media (max-width: 780px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 165px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 28px;
    font-weight: 400;
    width: 380px;
    text-align: center;
    margin-bottom: 12px;
  }

  > p {
    color: #858882;
    max-width: 350px;
    font-size: 14px;
    margin-bottom: 40px;
  }

  a {
    margin-top: 35px;
    font-weight: 700;
    font-size: 13px;
    color: #45b54a;
    transition: color 0.2s;

    &:hover {
      color: #4dd153;
    }
  }

  @media (max-width: 780px) {
    width: 100vw;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  padding: 20px 0;
  border-top: 1.1px solid rgb(229, 235, 231);

  p {
    font-size: 13px;
  }
`;
