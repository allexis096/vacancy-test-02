import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import navContext from '../../context/navContext';

import LeftBar from '../../components/LeftBar';

import { Container, DashboardExtract } from './styles';

const Extract: React.FC = () => {
  const history = useHistory();

  const { extract, setExtract } = useContext(navContext);

  useEffect(() => {
    setExtract(true);
    history.push('/extract');
  }, [extract, setExtract, history]);

  return (
    <Container>
      <LeftBar />
      <DashboardExtract>
        <h1>EXTRATO</h1>
      </DashboardExtract>
    </Container>
  );
};

export default Extract;
