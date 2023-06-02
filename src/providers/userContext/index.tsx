import React, {
  //   SetStateAction,
  //   useEffect,
  useState,
  createContext,
} from 'react';
import api from '../../services/api';
import { iUser, iUserReturn } from './types';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { RegisterData } from '../../pages/LandingPage/schema';
// import { useNavigate } from 'react-router-dom';

export interface iUserProviderValue {
  userList: null | iUserReturn[];
  userRegister: (data: RegisterData) => void;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userList, setUsersList] = useState<null | iUserReturn[]>(null);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const res = await api.get<iUserReturn[]>(`/users`);
  //         setUsersList(res.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }, []);

  const userRegister = async (data: RegisterData) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await api.post<iUser>('/users', data);
      toast.success('Conta criada com sucesso');
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userList,
        userRegister,
      }}>
      {children}
    </UserContext.Provider>
  );
};
