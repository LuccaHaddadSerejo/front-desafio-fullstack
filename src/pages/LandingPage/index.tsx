import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginData, schema } from './schema';
import RegisterModal from '../../components/RegisterModal';
import useContextHook from '../../hooks/userContextHook';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { StyledMain, StyledError } from './style';
import ConectionsBackground from '../../assets/img/undraw_conection.svg';

const LandingPage = () => {
  const { userLogin, toggleModal, isOpenModal } = useContextHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledMain>
      <section>
        <div>
          <h1>Personal Agenda</h1>
          <p>A sua agenda online. Simples, rápida e intuitiva.</p>
        </div>
        <img src={ConectionsBackground} alt='Conections image' />
      </section>
      <section>
        <div>
          <p>Bem vindo</p>
          <h2>Faça login na sua conta</h2>
        </div>
        <form onSubmit={handleSubmit(userLogin)}>
          <Input
            inputVariation={'form'}
            id={'emailLogin'}
            type={'email'}
            disabled={false}
            label={'Email'}
            required={true}
            placeholder={'Digite seu email'}
            register={register('email')}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordLogin'}
            type={'password'}
            disabled={false}
            label={'Senha'}
            required={true}
            placeholder={'Digite sua senha'}
            register={register('password')}
          />
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}

          <Button type={'submit'} buttonVariation={'login'}>
            Entrar
          </Button>
        </form>
        <div>
          <p>Não tem uma conta?</p>
          <Button
            type={'submit'}
            buttonVariation={'register'}
            onClick={toggleModal}>
            Cadastre-se
          </Button>
        </div>
      </section>
      {isOpenModal && <RegisterModal toggleModal={toggleModal} />}
    </StyledMain>
  );
};

export default LandingPage;
