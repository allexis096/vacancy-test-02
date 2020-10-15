import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import backgroundLogin from '../../assets/background-login.jpeg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Background = styled.div`
  width: 50vw;
  background: url(${backgroundLogin}) no-repeat center;
  background-size: cover;
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

  > h1 {
    font-size: 28px;
    font-weight: 400;
    width: 380px;
    text-align: center;
    margin-bottom: 12px;
  }

  span {
    color: #858882;
    max-width: 350px;
    font-size: 14px;
    margin-bottom: 40px;
  }
`;

export const Form = styled(Unform)`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; */
`;
