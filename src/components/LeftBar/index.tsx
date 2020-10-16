import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MdHome, MdNotifications, MdVisibility } from 'react-icons/md';
import { BiMoney } from 'react-icons/bi';
import { RiNewspaperLine } from 'react-icons/ri';

import navContext from '../../context/navContext';

import logoImg from '../../assets/logo-off-white.png';

import {
  NavContainer,
  Header,
  HeaderLogo,
  HeaderBalance,
  NavBar,
  NavAction,
} from './styles';

const LeftBar: React.FC = () => {
  const history = useHistory();

  const {
    home,
    balance,
    extract,
    setHome,
    setBalance,
    setExtract,
  } = useContext(navContext);

  const handleHome = useCallback(() => {
    setBalance(false);
    setExtract(false);
    setHome(true);

    history.push('/dashboard');
  }, [history, setHome, setBalance, setExtract]);

  const handleBalance = useCallback(() => {
    setExtract(false);
    setHome(false);
    setBalance(true);

    history.push('/balance');
  }, [history, setHome, setBalance, setExtract]);

  const handleExtract = useCallback(() => {
    setBalance(false);
    setHome(false);
    setExtract(true);

    history.push('/extract');
  }, [history, setHome, setBalance, setExtract]);

  return (
    <NavContainer>
      <Header>
        <HeaderLogo>
          <img src={logoImg} alt="logo" />
          <MdNotifications color="#45b34a" size={24} />
        </HeaderLogo>

        <HeaderBalance>
          <div>
            <p>Saldo da conta</p>
            <strong>R$15.150,00</strong>
          </div>
          <MdVisibility color="#999e9b" size={24} />
        </HeaderBalance>
      </Header>

      <NavBar>
        <NavAction onClick={handleHome} home={home}>
          <MdHome color="#999e9b" size={24} />
          <span>Início</span>
        </NavAction>

        <NavAction onClick={handleBalance} balance={balance}>
          <BiMoney color="#999e9b" size={24} />
          <span>Saldo</span>
        </NavAction>

        <NavAction onClick={handleExtract} extract={extract}>
          <RiNewspaperLine color="#999e9b" size={24} />
          <span>Extrato da conta</span>
        </NavAction>
      </NavBar>
    </NavContainer>
  );
};

export default LeftBar;
