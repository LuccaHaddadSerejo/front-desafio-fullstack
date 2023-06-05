import React, { useState } from 'react';
import useContextHook from '../../hooks/userContextHook';
import useContactContextHook from '../../hooks/contactContextHook';
import EditProfileModal from '../../components/EditProfileModal';
import AddContactModal from '../../components/AddContactModal';
import EditContactModal from '../../components/EditContactModal';
import ContactCard from '../../components/ContactCard';
import { FaUserEdit } from 'react-icons/fa';
import { BsPersonPlusFill } from 'react-icons/bs';
import { iContact } from '../../providers/contactsContext/types';
import { StyledHeader, StyledMain } from './style';
import Button from '../../components/Button';
import NoContactsBackground from '../../assets/img/undraw_nocontacts.svg';

const Dashboard = () => {
  const { user, updatedUser, isOpenModal, toggleModal, logOff } =
    useContextHook();
  const {
    toggleContactModal,
    isOpenContactModal,
    toggleEditContactModal,
    isOpenEditContactModal,
  } = useContactContextHook();

  const [contactId, setContactId] = useState<number>(0);

  const setContact = (elt: iContact) => {
    toggleEditContactModal();
    setContactId(elt.id);
  };

  return (
    <>
      <StyledHeader>
        <div>
          <h1>Agenda online</h1>
          <div>
            <p>Nome: {updatedUser.name}</p>
            <p>Email: {updatedUser.email}</p>
            <p>Telefone: {updatedUser.phone}</p>
          </div>
        </div>
        <div>
          <Button
            onClick={toggleModal}
            buttonVariation={'editProfile'}
            type={'button'}>
            Editar perfil
            <FaUserEdit size={20} />
          </Button>
          <Button onClick={logOff} buttonVariation={'logout'} type={'button'}>
            Sair
          </Button>
        </div>
      </StyledHeader>
      <StyledMain>
        <section>
          <div>
            <Button
              type={'button'}
              onClick={toggleContactModal}
              buttonVariation={'addContact'}>
              Adicionar contato
              <BsPersonPlusFill />
            </Button>
          </div>

          <ul>
            {user.contacts.length > 0 ? (
              user.contacts.map((elt) => {
                return (
                  <ContactCard
                    key={elt.id}
                    data={elt}
                    setContact={setContact}></ContactCard>
                );
              })
            ) : (
              <div>
                <p>Você ainda não possui contatos, adicione o primeiro!</p>
                <img
                  src={NoContactsBackground}
                  alt='Pessoa sentada adicionando contatos online'
                />
              </div>
            )}
          </ul>
        </section>
        {isOpenModal && <EditProfileModal toggleModal={toggleModal} />}
        {isOpenContactModal && (
          <AddContactModal toggleContactModal={toggleContactModal} />
        )}
        {isOpenEditContactModal && (
          <EditContactModal
            contactId={contactId}
            toggleEditContactModal={toggleEditContactModal}
          />
        )}
      </StyledMain>
    </>
  );
};

export default Dashboard;
