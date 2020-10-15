import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  textLabel: string;
}

const Input: React.FC<InputProps> = ({ name, textLabel, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { registerField, fieldName, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container hasError={!!error}>
      <input {...rest} ref={inputRef} defaultValue={defaultValue} name={name} />
      <label htmlFor={name}>{textLabel}</label>
      {error && <span>É obrigatório</span>}
    </Container>
  );
};

export default Input;
