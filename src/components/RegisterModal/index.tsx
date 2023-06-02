import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../Modal';
import { RegisterData, schema } from './schema';
import useContextHook from '../../hooks/userContextHook';

interface RegisterModalProps {
  toggleModal: () => void;
}

const RegisterModal = ({ toggleModal }: RegisterModalProps) => {
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const { userRegister } = useContextHook();

  return (
    <Modal toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(userRegister)}>
        <label htmlFor='name'>Nome</label>
        <input type='text' id='name' {...register('name')} />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' {...register('email')} />

        <label htmlFor='phone'>Telefone</label>
        <input type='text' id='phone' {...register('phone')} />

        <label htmlFor='password'>Senha</label>
        <input type='password' id='password' {...register('password')} />

        <button type='submit'>Registrar</button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
