/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { iUser } from './types';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { LoginData } from '../../pages/LandingPage/schema';
import { RegisterData } from '../../components/RegisterModal/schema';
import { useNavigate } from 'react-router-dom';

export interface iUserProviderValue {
  userRegister: (data: RegisterData) => void;
  userLogin: (data: LoginData) => void;
  toggleModal: () => void;
  isOpenModal: boolean;
  loading: boolean;
  user: iUser;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<iUser>({
    id: 0,
    name: '',
    email: '',
    phone: '',
    password: '',
    contacts: [],
    createdAt: '',
    updatedAt: '',
  });
  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');

    if (!token) {
      setLoading(false);
      navigate('/');
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const userRegister = async (data: RegisterData) => {
    try {
      const res = await api.post<iUser>('/users', data);
      toast.success('Conta criada com sucesso');
      toggleModal;
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  const userLogin = async (data: LoginData) => {
    try {
      const res = await api.post('/login', data);
      const { token } = res.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const getUsersRes = await api.get('/users');
      const loggedUser = getUsersRes.data.filter(
        (elt: iUser) => elt.email === data.email
      )[0];

      localStorage.setItem('@TOKEN', token);
      setUser(loggedUser);

      toast.success('Login feito com sucesso.');
      navigate('/Dashboard');
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        toggleModal,
        isOpenModal,
        loading,
        user,
      }}>
      {children}
    </UserContext.Provider>
  );
};
