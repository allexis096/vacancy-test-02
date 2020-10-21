import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import navContext from '../../context/navContext';
import LeftBar from '../../components/LeftBar';
// import api from '../../services/api';

import { Container, DashboardStart, Company } from './styles';

const Dashboard: React.FC = () => {
  const [company] = useState(() => {
    const companyName = localStorage.getItem('@Contasimples:company');

    if (companyName) {
      return JSON.parse(companyName);
    }

    return '';
  });

  const history = useHistory();

  const { home, setHome } = useContext(navContext);

  useEffect(() => {
    setHome(true);
    history.push('/dashboard');

    const companyName = localStorage.getItem('@Contasimples:company');

    if (!companyName) {
      history.push('/');
    }
  }, [home, setHome, history]);

  return (
    <Container>
      <LeftBar />
      <DashboardStart>
        <h1>Bem vindo à conta, {company}!</h1>

        <Company>
          <p>EMPRESA UM LTDA ME, CNPJ: 13.182.905/0001-71</p>
          <span>Banco: 999, CONTA SIMPLES, Ag 1, Conta 123456-1</span>
        </Company>
      </DashboardStart>
    </Container>
  );
};

export default Dashboard;
