import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import navContext from '../../context/navContext';

import LeftBar from '../../components/LeftBar';

import { Container, DashboardExtract, MainTable, Buttons } from './styles';

const Extract: React.FC = () => {
  const history = useHistory();

  const { extract, setExtract, transactions } = useContext(navContext);

  useEffect(() => {
    setExtract(true);
    history.push('/extract');

    const companyName = localStorage.getItem('@Contasimples:company');

    if (!companyName) {
      history.push('/');
    }
  }, [extract, setExtract, history]);

  const handleIncome = useCallback(async () => {
    console.log('todo');
  }, []);

  const handleOutcome = useCallback(() => {
    console.log('todo');
  }, []);

  const handleTotal = useCallback(() => {
    console.log('todo');
  }, []);

  return (
    <Container>
      <LeftBar />
      <DashboardExtract>
        <h1>EXTRATO DETALHADO DA CONTA</h1>

        <Buttons>
          <button type="button" onClick={handleIncome}>
            Receitas
          </button>
          <button type="button" onClick={handleOutcome}>
            Despesas
          </button>
          <button type="button" onClick={handleTotal}>
            Todas as transações
          </button>
        </Buttons>

        <MainTable>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.tipoTransacao}</td>
                  <td className={transaction.formattedCredit}>
                    {transaction.credito === true ? '+' : '-'}{' '}
                    {transaction.formattedValue}
                  </td>
                  <td>{transaction.descricaoTransacao}</td>
                  <td>{transaction.formattedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </MainTable>
      </DashboardExtract>
    </Container>
  );
};

export default Extract;
