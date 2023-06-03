import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty(),
  phone: z.string().nonempty(),
  email: z.string().email('É necessário ser um email').nonempty(),
});

type UpdateData = z.infer<typeof schema>;

export { schema, UpdateData };
