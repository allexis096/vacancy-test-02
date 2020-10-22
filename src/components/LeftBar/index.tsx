import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MdHome, MdNotifications, MdRefresh } from 'react-icons/md';
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
import formatValue from '../../utils/formatValue';

const LeftBar: React.FC = () => {
  const history = useHistory();

  const {
    home,
    card,
    extract,
    setHome,
    setCard,
    setExtract,
    balanceTotal,
  } = useContext(navContext);

  const handleHome = useCallback(() => {
    setCard(false);
    setExtract(false);
    setHome(true);

    history.push('/dashboard');
  }, [history, setHome, setCard, setExtract]);

  const handleCard = useCallback(() => {
    setExtract(false);
    setHome(false);
    setCard(true);

    history.push('/card');
  }, [history, setHome, setCard, setExtract]);

  const handleExtract = useCallback(() => {
    setCard(false);
    setHome(false);
    setExtract(true);

    history.push('/extract');
  }, [history, setHome, setCard, setExtract]);

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
            <strong>{formatValue(Number(balanceTotal))}</strong>
          </div>
          <MdRefresh
            color="#999e9b"
            size={24}
            // eslint-disable-next-line no-restricted-globals
            onClick={() => location.reload()}
          />
        </HeaderBalance>
      </Header>

      <NavBar>
        <NavAction onClick={handleHome} home={home}>
          <MdHome color="#999e9b" size={24} />
          <span>Início</span>
        </NavAction>

        <NavAction onClick={handleCard} card={card}>
          <BiMoney color="#999e9b" size={24} />
          <span>Cartão</span>
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
