import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../Modal';
import { CreateData, schema } from './schema';
import useContactContextHook from '../../hooks/contactContextHook';
import StyledContent from './style';
import Input from '../Input';
import Button from '../Button';

interface AddContactModalProps {
  toggleContactModal: () => void;
}

const AddContactModal = ({ toggleContactModal }: AddContactModalProps) => {
  const { register, handleSubmit } = useForm<CreateData>({
    resolver: zodResolver(schema),
  });

  const { contactRegister } = useContactContextHook();

  return (
    <Modal toggleModal={toggleContactModal}>
      <StyledContent>
        <div>
          <h2>Criar contato</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleContactModal}>
            X
          </Button>
        </div>
        <form onSubmit={handleSubmit(contactRegister)}>
          <Input
            inputVariation={'form'}
            id={'nameEditProfile'}
            type={'text'}
            disabled={false}
            label={'Nome'}
            placeholder={'Digite o nome'}
            register={register('name')}
          />

          <Input
            inputVariation={'form'}
            id={'emailEditProfile'}
            type={'email'}
            disabled={false}
            label={'Email'}
            placeholder={'Digite o email'}
            register={register('email')}
          />

          <Input
            inputVariation={'form'}
            id={'phoneEditProfile'}
            type={'text'}
            disabled={false}
            label={'Telefone'}
            placeholder={'Digite o telefone'}
            register={register('phone')}
          />

          <Button type={'submit'} buttonVariation={'login'}>
            Criar contato
          </Button>
        </form>
      </StyledContent>
    </Modal>
  );
};

export default AddContactModal;
