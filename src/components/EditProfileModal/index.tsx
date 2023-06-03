import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../Modal';
import { UpdateData, schema } from './schema';
import useContextHook from '../../hooks/userContextHook';
import StyledContent from './style';
import Input from '../Input';
import Button from '../Button';

interface EditProfileModalProps {
  toggleModal: () => void;
}

const EditProfileModal = ({ toggleModal }: EditProfileModalProps) => {
  const { register, handleSubmit } = useForm<UpdateData>({
    resolver: zodResolver(schema),
  });

  const { userUpdate, user, userDelete } = useContextHook();

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
            placeholder={'Digite seu nome'}
            register={register('name')}
            defaultValue={user.name}
          />

          <Input
            inputVariation={'form'}
            id={'emailEditProfile'}
            type={'email'}
            disabled={false}
            label={'Email'}
            placeholder={'Digite seu email'}
            register={register('email')}
            defaultValue={user.email}
          />

          <Input
            inputVariation={'form'}
            id={'phoneEditProfile'}
            type={'text'}
            disabled={false}
            label={'Telefone'}
            placeholder={'Digite seu telefone'}
            register={register('phone')}
            defaultValue={user.phone}
          />

          <Input
            inputVariation={'form'}
            id={'passwordEditProfile'}
            type={'password'}
            disabled={false}
            label={'Senha'}
            placeholder={'Digite sua senha'}
            register={register('password')}
          />
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
