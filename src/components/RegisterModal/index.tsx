import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../Modal';
import { RegisterData, schema } from './schema';
import useContextHook from '../../hooks/userContextHook';
import StyledContent from './style';
import Input from '../Input';
import Button from '../Button';

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
      <StyledContent>
        <div>
          <h2>Formulário de cadastro</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleModal}>
            X
          </Button>
        </div>
        <form onSubmit={handleSubmit(userRegister)}>
          <Input
            inputVariation={'form'}
            id={'name'}
            type={'text'}
            disabled={false}
            label={'Nome'}
            placeholder={'Digite seu nome'}
            register={register('name')}
          />

          <Input
            inputVariation={'form'}
            id={'email'}
            type={'email'}
            disabled={false}
            label={'Email'}
            placeholder={'Digite seu email'}
            register={register('email')}
          />

          <Input
            inputVariation={'form'}
            id={'phone'}
            type={'text'}
            disabled={false}
            label={'Telefone'}
            placeholder={'Digite seu telefone'}
            register={register('phone')}
          />

          <Input
            inputVariation={'form'}
            id={'password'}
            type={'password'}
            disabled={false}
            label={'Senha'}
            placeholder={'Digite sua senha'}
            register={register('password')}
          />

          <Button type={'submit'} buttonVariation={'login'}>
            Cadastrar
          </Button>
        </form>
      </StyledContent>
    </Modal>
  );
};

export default RegisterModal;
