import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../Modal';
import { UpdateData, schema } from './schema';
import useContactContextHook from '../../hooks/contactContextHook';
import useContextHook from '../../hooks/userContextHook';
import StyledContent from './style';
import Input from '../Input';
import Button from '../Button';
import { iContact } from '../../providers/contactsContext/types';

interface EditContactModalProps {
  toggleEditContactModal: () => void;
  contactId: number;
}

const EditContactModal = ({
  toggleEditContactModal,
  contactId,
}: EditContactModalProps) => {
  const { register, handleSubmit } = useForm<UpdateData>({
    resolver: zodResolver(schema),
  });

  const { contactUpdate, contactDelete } = useContactContextHook();
  const { user } = useContextHook();

  const findContact = (): iContact | undefined => {
    return user.contacts.find((elt) => elt.id === contactId);
  };

  return (
    <Modal toggleModal={toggleEditContactModal}>
      <StyledContent>
        <div>
          <h2>Editar contato</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleEditContactModal}>
            X
          </Button>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            contactUpdate(data, contactId);
          })}>
          <Input
            inputVariation={'form'}
            id={'nameEditProfile'}
            type={'text'}
            disabled={false}
            label={'Nome'}
            placeholder={'Digite o nome'}
            register={register('name')}
            defaultValue={findContact()?.name}
          />

          <Input
            inputVariation={'form'}
            id={'emailEditProfile'}
            type={'email'}
            disabled={false}
            label={'Email'}
            placeholder={'Digite o email'}
            register={register('email')}
            defaultValue={findContact()?.email}
          />

          <Input
            inputVariation={'form'}
            id={'phoneEditProfile'}
            type={'text'}
            disabled={false}
            label={'Telefone'}
            placeholder={'Digite o telefone'}
            register={register('phone')}
            defaultValue={findContact()?.phone}
          />

          <div>
            <Button type={'submit'} buttonVariation={'login'}>
              Editar contato
            </Button>
            <Button
              type={'button'}
              buttonVariation={'delete'}
              onClick={() => contactDelete(contactId)}>
              Deletar contato
            </Button>
          </div>
        </form>
      </StyledContent>
    </Modal>
  );
};

export default EditContactModal;
