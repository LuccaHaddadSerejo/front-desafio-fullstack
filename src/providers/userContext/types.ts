import { iContact } from '../contactsContext/types';

interface iUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  contacts: iContact[];
  createdAt: string;
  updatedAt: string;
}

type iUserReturn = Omit<iUser, 'password'>;

export { iUser, iUserReturn };
