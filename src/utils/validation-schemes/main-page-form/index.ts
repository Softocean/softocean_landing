import z from 'zod';
import { MainPageFormDataType } from '@/types/types';

export const MainPageFormValidationScheme = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
});
