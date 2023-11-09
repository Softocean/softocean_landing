import z from 'zod';

export const MainPageFormValidationScheme = z.object({
  name: z
    .string()
    .nonempty({ message: "Field 'Name' required" })
    .min(1, { message: 'Name is too short' }),
  email: z.string().nonempty({ message: "Field 'Email' required" }).email(),
  telephone: z
    .string()
    .nonempty({ message: "Field 'Phone' required" })
    .min(1, { message: 'Phone is too short' }),
  text: z.string().optional(),
});
