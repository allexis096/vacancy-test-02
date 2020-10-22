import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import navContext from '../../context/navContext';

import LeftBar from '../../components/LeftBar';

import { Container, DashboardCard } from './styles';

const Card: React.FC = () => {
  const [company] = useState(() => {
    const companyName = localStorage.getItem('@Contasimples:company');

    if (companyName) {
      return JSON.parse(companyName);
    }

    return '';
  });

  const history = useHistory();

  const { card, setCard } = useContext(navContext);

  useEffect(() => {
    setCard(true);
    history.push('/card');

    const companyName = localStorage.getItem('@Contasimples:company');

    if (!companyName) {
      history.push('/');
    }
  }, [card, setCard, history]);

  return (
    <Container>
      <LeftBar />
      <DashboardCard>
        <h1>TO-DO</h1>
      </DashboardCard>
    </Container>
  );
};

export default Card;
