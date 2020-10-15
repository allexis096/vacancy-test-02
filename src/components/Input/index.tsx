import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  textLabel: string;
}

const Input: React.FC<InputProps> = ({ name, textLabel, ...rest }) => {
  const inputRef = useRef(null);

  const { registerField, fieldName, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container {...rest}>
      <input ref={inputRef} defaultValue={defaultValue} name={name} />
      <label htmlFor={name}>{textLabel}</label>
    </Container>
  );
};

export default Input;
