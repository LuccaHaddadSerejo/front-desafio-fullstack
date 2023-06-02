import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('O nome é obrigatório'),
  phone: z.string().nonempty('O telefone é obrigatório'),
  email: z.string().email('Deve ser um e-mail'),
  password: z.string().nonempty('Senha é obrigatória'),
});

type RegisterData = z.infer<typeof schema>;

export { schema, RegisterData };
