import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Deve ser um e-mail'),
  password: z.string().nonempty('Senha é obrigatória'),
});

type LoginData = z.infer<typeof schema>;

export { schema, LoginData };
