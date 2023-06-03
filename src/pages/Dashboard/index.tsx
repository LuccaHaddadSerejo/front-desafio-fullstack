import React, { useState } from 'react';
import useContextHook from '../../hooks/userContextHook';
import useContactContextHook from '../../hooks/contactContextHook';
import EditProfileModal from '../../components/EditProfileModal';
import AddContactModal from '../../components/AddContactModal';
import EditContactModal from '../../components/EditContactModal';
import { iContact } from '../../providers/contactsContext/types';

const Dashboard = () => {
  const { user, isOpenModal, toggleModal, logOff } = useContextHook();
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
      <header>
        <div>
          <h1>Agenda do {user.name}</h1>
          <button onClick={logOff}>Sair</button>
        </div>

        <div>
          <p>Editar perfil</p>
          <button onClick={toggleModal}>+</button>
        </div>
      </header>
      <main>
        <section>
          <div>
            <h2>Adicionar contato</h2>
            <button onClick={toggleContactModal}>+</button>
          </div>

          <ul>
            {user.contacts === undefined ? (
              <div>
                <p>Você ainda não possui contatos, adicione o primeiro!</p>
                <button>+</button>
              </div>
            ) : (
              user.contacts.map((elt) => {
                return (
                  <li key={elt.id}>
                    <div>
                      <p>{elt.name}</p>
                      <p>{elt.email}</p>
                      <p>{elt.phone}</p>
                    </div>
                    <div>
                      <button onClick={() => setContact(elt)}>
                        Editar Contato
                      </button>
                    </div>
                  </li>
                );
              })
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
      </main>
    </>
  );
};

export default Dashboard;
