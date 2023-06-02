import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginData, schema } from './schema';
import RegisterModal from '../../components/RegisterModal';
import useContextHook from '../../hooks/userContextHook';

const LandingPage = () => {
  const { userLogin, toggleModal, isOpenModal } = useContextHook();

  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  return (
    <main>
      <h1>Landing!</h1>
      <form onSubmit={handleSubmit(userLogin)}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' {...register('email')} />

        <label htmlFor='password'>Senha</label>
        <input type='password' id='password' {...register('password')} />

        <button type='submit'>Fazer login</button>
      </form>
      <div>
        <button onClick={toggleModal}>Registrar</button>
      </div>
      {isOpenModal && <RegisterModal toggleModal={toggleModal} />}
    </main>
  );
};

export default LandingPage;
