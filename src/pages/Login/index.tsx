import React, { useCallback, useRef } from 'react';

import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Background, LoginContainer, Form } from './styles';

const Login: React.FC = () => {
  const formRef = useRef(null);

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Background />
      <LoginContainer>
        <img src={logoImg} alt="Logo" />

        <h1>
          <strong>Bem-vindo</strong>
          &nbsp;ao Internet Banking da Conta Simples
        </h1>

        <span>Preencha os campos abaixo para acessar sua conta</span>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" textLabel="Endereço de e-mail" />
          <Input name="password" textLabel="Senha" />

          <Button>ENTRAR</Button>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
