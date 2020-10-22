import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import navContext from '../../context/navContext';
import LeftBar from '../../components/LeftBar';
import { apiCompanies } from '../../services/api';

import { Container, DashboardStart, Company } from './styles';

interface ResponseCompany {
  cnpj: string;
  nomeEmpresa: string;
  dadosBancario: {
    agencia: number;
    banco: number;
    bancoNome: string;
    conta: number;
    digitoConta: string;
  };
}

const Dashboard: React.FC = () => {
  const [company, setCompany] = useState<ResponseCompany>();

  const [companyLocalStorage] = useState(() => {
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

    async function loadCompany(): Promise<void> {
      const { data } = await apiCompanies.get('/empresas');

      const randomCompany = Math.floor(Math.random() * 2);

      setCompany(data[randomCompany]);
    }

    loadCompany();
  }, [home, setHome, history]);

  return (
    <Container>
      <LeftBar />
      <DashboardStart>
        <h1>Bem vindo à conta, {companyLocalStorage}!</h1>

        <Company>
          <p>
            {company?.nomeEmpresa}, CNPJ: {company?.cnpj}
          </p>
          <span>
            Banco: {company?.dadosBancario.banco}{' '}
            {company?.dadosBancario.bancoNome}, Ag{' '}
            {company?.dadosBancario.agencia}, Conta{' '}
            {company?.dadosBancario.conta}-{company?.dadosBancario.digitoConta}
          </span>
        </Company>
      </DashboardStart>
    </Container>
  );
};

export default Dashboard;
