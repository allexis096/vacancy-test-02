import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import navContext from '../../context/navContext';

import LeftBar from '../../components/LeftBar';

import { Container, DashboardBalance } from './styles';

const Balance: React.FC = () => {
  const [company] = useState(() => {
    const companyName = localStorage.getItem('@Contasimples:company');

    if (companyName) {
      return JSON.parse(companyName);
    }

    return '';
  });

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
        <h1>{company}, este é o seu saldo:</h1>

        <span>R$10.500,00</span>
      </DashboardBalance>
    </Container>
  );
};

export default Balance;
