import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import navContext from '../../context/navContext';

import LeftBar from '../../components/LeftBar';

import { Container, DashboardBalance } from './styles';

const Balance: React.FC = () => {
  const history = useHistory();

  const { balance, setBalance } = useContext(navContext);

  useEffect(() => {
    setBalance(true);
    history.push('/balance');
  }, [balance, setBalance, history]);

  return (
    <Container>
      <LeftBar />
      <DashboardBalance>
        <h1>SALDO</h1>
      </DashboardBalance>
    </Container>
  );
};

export default Balance;
