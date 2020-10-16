import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface NavContextProps {
  home: boolean;
  balance: boolean;
  extract: boolean;

  setHome: Dispatch<SetStateAction<boolean>>;
  setBalance: Dispatch<SetStateAction<boolean>>;
  setExtract: Dispatch<SetStateAction<boolean>>;
}

const navContext = createContext<NavContextProps>({} as NavContextProps);

export const NavContextProvider: React.FC = ({ children }) => {
  const [home, setHome] = useState(false);
  const [balance, setBalance] = useState(false);
  const [extract, setExtract] = useState(false);

  return (
    <navContext.Provider
      value={{ home, setHome, balance, setBalance, extract, setExtract }}
    >
      {children}
    </navContext.Provider>
  );
};

export default navContext;
