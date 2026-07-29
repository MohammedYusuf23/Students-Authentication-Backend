import { z } from 'zod';

export const studentSchema = z
  .object({
    name: z.string().trim().min(3, 'Name must contain at least 3 characters'),

    department: z.string().trim().min(2, 'Department is required'),

    registerNumber: z
      .string()
      .trim()
      .regex(
        /^(CSE|IT|ECE|EEE|MECH|CIVIL|BCA|MCA)\d{4}\d{3}[A-Z]$/,
        'Register Number must be like CSE2025001A'
      ),

    email: z.email('Invalid email address'),

    password: z.string().min(6, 'Password must contain at least 6 characters'),

    confirmPassword: z.string(),

    age: z.number().min(17, 'Minimum age is 17').max(35, 'Maximum age is 35'),

    dob: z.string().min(1, 'Date of Birth is required'),

    phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid phone number'),

    fatherName: z.string().trim().min(3, 'Father Name is required'),

    motherName: z.string().trim().min(3, 'Mother Name is required'),

    address: z
      .string()
      .trim()
      .min(10, 'Address must contain at least 10 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });
