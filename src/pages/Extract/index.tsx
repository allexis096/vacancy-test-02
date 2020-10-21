import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import navContext from '../../context/navContext';

import LeftBar from '../../components/LeftBar';

import { Container, DashboardExtract, MainTable } from './styles';

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

  return (
    <Container>
      <LeftBar />
      <DashboardExtract>
        <h1>EXTRATO DETALHADO DA CONTA</h1>

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
              {transactions.map(transaction => {
                return (
                  <tr key={transaction.formattedValue}>
                    <td>{transaction.tipoTransacao}</td>
                    <td className={transaction.formattedCredit}>
                      {transaction.credito === true ? '+' : '-'}{' '}
                      {transaction.formattedValue}
                    </td>
                    <td>{transaction.descricaoTransacao}</td>
                    <td>{transaction.formattedDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </MainTable>
      </DashboardExtract>
    </Container>
  );
};

export default Extract;
