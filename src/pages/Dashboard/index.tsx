import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import navContext from '../../context/navContext';

import LeftBar from '../../components/LeftBar';

import { Container, DashboardStart } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const { home, setHome } = useContext(navContext);

  useEffect(() => {
    setHome(true);
    history.push('/dashboard');
  }, [home, setHome, history]);

  return (
    <Container>
      <LeftBar />
      <DashboardStart>
        <h1>DASHBOARD</h1>
      </DashboardStart>
    </Container>
  );
};

export default Dashboard;
