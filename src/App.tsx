import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { NavContextProvider } from './context/navContext';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <NavContextProvider>
          <Routes />
        </NavContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
};

export default App;
