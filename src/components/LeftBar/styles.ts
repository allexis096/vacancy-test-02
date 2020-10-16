import styled, { css } from 'styled-components';

interface NavActionProps {
  home?: boolean;
  balance?: boolean;
  extract?: boolean;
}

export const NavContainer = styled.nav`
  width: 20vw;
  background-color: rgb(229, 235, 231);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  img {
    width: 200px;
    margin-right: 10px;
  }

  svg {
    cursor: pointer;
  }
`;

export const HeaderBalance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 1px solid #999e9b;

  strong {
    font-size: 22px;
  }

  svg {
    cursor: pointer;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const NavAction = styled.a<NavActionProps>`
  display: flex;
  align-items: center;

  width: 70%;
  border-radius: 10px;

  margin-top: 20px;
  padding: 5px;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }

  ${props =>
    props.home &&
    css`
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
      background-color: #fff;
    `}

  ${props =>
    props.balance &&
    css`
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
      background-color: #fff;
    `}

  ${props =>
    props.extract &&
    css`
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
      background-color: #fff;
    `}

  span {
    margin-left: 10px;
  }
`;
