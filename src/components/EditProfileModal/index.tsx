import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../Modal';
import { UpdateData, schema } from './schema';
import useContextHook from '../../hooks/userContextHook';
import { StyledContent, StyledError } from './style';
import Input from '../Input';
import Button from '../Button';

interface EditProfileModalProps {
  toggleModal: () => void;
}

const EditProfileModal = ({ toggleModal }: EditProfileModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateData>({
    resolver: zodResolver(schema),
  });

  const { userUpdate, updatedUser, userDelete } = useContextHook();

  return (
    <Modal toggleModal={toggleModal}>
      <StyledContent>
        <div>
          <h2>Atualização de perfil</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleModal}>
            X
          </Button>
        </div>
        <form onSubmit={handleSubmit(userUpdate)}>
          <Input
            inputVariation={'form'}
            id={'nameEditProfile'}
            type={'text'}
            disabled={false}
            label={'Nome'}
            required={false}
            placeholder={'Digite seu nome'}
            register={register('name')}
            defaultValue={updatedUser.name}
          />
          {errors.name?.message && (
            <StyledError>{errors.name.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'emailEditProfile'}
            type={'email'}
            disabled={false}
            label={'Email'}
            required={false}
            placeholder={'Digite seu email'}
            register={register('email')}
            defaultValue={updatedUser.email}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneEditProfile'}
            type={'tel'}
            disabled={false}
            label={'Telefone'}
            required={false}
            placeholder={'Digite seu telefone'}
            register={register('phone')}
            defaultValue={updatedUser.phone}
          />
          {errors.phone?.message && (
            <StyledError>{errors.phone.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordEditProfile'}
            type={'password'}
            disabled={false}
            label={'Senha'}
            required={false}
            placeholder={'Digite sua senha'}
            register={register('password')}
          />
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}

          <div>
            <Button type={'submit'} buttonVariation={'login'}>
              Atualizar perfil
            </Button>
            <Button
              type={'button'}
              buttonVariation={'delete'}
              onClick={userDelete}>
              Deletar perfil
            </Button>
          </div>
        </form>
      </StyledContent>
    </Modal>
  );
};

export default EditProfileModal;
