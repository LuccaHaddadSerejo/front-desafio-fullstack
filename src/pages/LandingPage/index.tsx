import React, { useContext } from 'react';
import { UserContext } from '../../providers/userContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RegisterData, schema } from './schema';
// import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const { userRegister } = useContext(UserContext);
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  return (
    <main>
      <h1>Landing!</h1>
      <form onSubmit={handleSubmit(userRegister)}>
        <label htmlFor='name'>Nome</label>
        <input type='text' id='name' {...register('name')} />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' {...register('email')} />

        <label htmlFor='phone'>Telefone</label>
        <input type='text' id='phone' {...register('phone')} />

        <label htmlFor='password'>Senha</label>
        <input type='password' id='password' {...register('password')} />

        <button type='submit'>Entrar</button>
      </form>
    </main>
  );
};

export default LandingPage;
