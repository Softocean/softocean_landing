import { MainPageFormDataType } from '@/types/types';
import z from 'zod';

export const MainPageFormValidationScheme = z.object({
  name: z.string().min(1, { message: 'Name is required field' }),
  email: z.string().min(1, { message: 'E-mail is required field' }).email('not valid E-mail'),
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      return /^\+?[1-9][0-9]{7,14}$/.test(val);
    }),
}) satisfies z.ZodType<MainPageFormDataType>;
