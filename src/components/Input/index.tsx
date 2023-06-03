import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledInput } from './style';

interface iInputProps {
  id?: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  label?: string;
  register?: UseFormRegisterReturn;
  inputVariation?: string;
  value?: string;
  defaultValue?: string;
}

const Input = ({
  id,
  type,
  placeholder,
  disabled,
  label,
  register,
  inputVariation,
  value,
  defaultValue,
}: iInputProps) => {
  return (
    <StyledInput inputVariation={inputVariation}>
      <div>
        <label htmlFor={id}>{label}</label>
      </div>
      <input
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        {...register}
      />
    </StyledInput>
  );
};

export default Input;
