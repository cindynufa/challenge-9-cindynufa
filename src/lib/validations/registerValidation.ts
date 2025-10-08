import { z } from 'zod';

export const registerValidation = z

  .object({
    name: z.string().trim().min(3, {
      message: 'Name is required. Name must be at least 3 characters long.',
    }),

    email: z.email({ message: 'Please enter a valid email address.' }),

    password: z.string().min(6, {
      message:
        'Password is required. Password must be at least 8 characters long.',
    }),

    confirmPassword: z.string({ message: 'Please confirm your password.' }),

    avatar: z.any().refine((files) => Array.from(files).length > 0, {
      message: 'Only image files are allowed (JPEG, PNG, or JPG).',
    }),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });
