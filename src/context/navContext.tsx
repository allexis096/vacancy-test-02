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
  balanceTotal: number | undefined;

  setHome: Dispatch<SetStateAction<boolean>>;
  setBalance: Dispatch<SetStateAction<boolean>>;
  setExtract: Dispatch<SetStateAction<boolean>>;
  setTransactions: Dispatch<SetStateAction<ResponseTransactions[]>>;
  setBalanceTotal: Dispatch<SetStateAction<any>>;
}

interface ResponseTransactions {
  id: number;
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
  const [balanceTotal, setBalanceTotal] = useState<number | undefined>();

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const responseTransactions = await apiTransactions.get('/transacoes');

      const companiesSplited = responseTransactions.data.reduce(
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

      const { credit, debit } = companiesFormatted.reduce(
        (prev: any, curr: ResponseTransactions) => {
          switch (curr.formattedCredit) {
            case 'credit':
              prev.credit += curr.valor;
              break;
            case 'debit':
              prev.debit += curr.valor;
              break;
            default:
              break;
          }

          return prev;
        },
        { credit: 0, debit: 0, total: 0 },
      );

      const total = Number(credit) - Number(debit);

      setBalanceTotal(total);
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

        balanceTotal,
        setBalanceTotal,
      }}
    >
      {children}
    </navContext.Provider>
  );
};

export default navContext;
