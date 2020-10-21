import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { apiTransactions } from '../services/api';
import formatValue from '../utils/formatValue';

interface NavContextProps {
  home: boolean;
  balance: boolean;
  extract: boolean;
  transactions: ResponseTransactions[];

  setHome: Dispatch<SetStateAction<boolean>>;
  setBalance: Dispatch<SetStateAction<boolean>>;
  setExtract: Dispatch<SetStateAction<boolean>>;
  setTransactions: Dispatch<SetStateAction<ResponseTransactions[]>>;
}

interface ResponseTransactions {
  empresaId: number;
  tipoTransacao: string;
  valor: number;
  descricaoTransacao: string;
  dataTransacao: string;
  credito: boolean;

  formattedCredit: string;
  formattedValue: string;
  formattedDate: Date;
}

const navContext = createContext<NavContextProps>({} as NavContextProps);

export const NavContextProvider: React.FC = ({ children }) => {
  const [home, setHome] = useState(false);
  const [balance, setBalance] = useState(false);
  const [extract, setExtract] = useState(false);
  const [transactions, setTransactions] = useState<ResponseTransactions[]>([]);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await apiTransactions.get('/transacoes');

      const companiesSplited = response.data.reduce(
        (prev: any, company: ResponseTransactions) => {
          if (typeof prev[company.empresaId] === 'undefined') {
            prev[company.empresaId] = [];
          }

          prev[company.empresaId].push(company);

          return prev;
        },
      );

      const randomCompany = Math.floor(Math.random() * 2) + 1;

      const companiesFormatted = companiesSplited[randomCompany].map(
        (transaction: ResponseTransactions) => ({
          ...transaction,
          formattedValue: formatValue(transaction.valor),
          formattedCredit: transaction.credito === true ? 'credit' : 'debit',
          formattedDate: new Date(transaction.dataTransacao).toLocaleDateString(
            'pt-br',
          ),
        }),
      );

      setTransactions(companiesFormatted);
    }

    loadTransactions();
  }, []);

  return (
    <navContext.Provider
      value={{
        home,
        setHome,
        balance,
        setBalance,
        extract,
        setExtract,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </navContext.Provider>
  );
};

export default navContext;
