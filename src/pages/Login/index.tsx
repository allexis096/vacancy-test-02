import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Background, LoginContainer, Footer } from './styles';

interface ErrorsYup {
  [key: string]: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async data => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().email().required(),
          password: Yup.string().max(6).required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        localStorage.setItem(
          '@Contasimples:company',
          JSON.stringify(data.name),
        );

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors: ErrorsYup = {};

          err.inner.forEach(error => {
            errors[error.path] = 'É obrigatório';
          });

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );

  return (
    <Container>
      <Background />
      <LoginContainer>
        <img src={logoImg} alt="Logo" />

        <h1>
          <strong>Bem-vindo</strong>
          &nbsp;ao Internet Banking da Conta Simples
        </h1>

        <p>Preencha os campos abaixo para acessar sua conta</p>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" textLabel="Nome da Empresa" />
          <Input name="email" textLabel="Endereço de e-mail" />
          <Input name="password" type="password" textLabel="Senha" />

          <Button type="submit">ENTRAR</Button>
        </Form>

        <a href="/">ESQUECI MINHA SENHA</a>

        <Footer>
          <p>
            Não tem uma conta? &nbsp;
            <a href="/">Abra uma conta simples</a>
          </p>
        </Footer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
