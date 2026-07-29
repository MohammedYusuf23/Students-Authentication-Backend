import express from 'express';
import { signup, login, profile } from '../controller/authController.js'

import { validate } from '../middleware/validate.js';
import { studentSchema } from '../validations/studentSchema.js';
import { loginSchema } from '../validations/loginSchema.js';

const router = express.Router();

// Student Signup
router.post('/signup', validate(studentSchema), signup);

// Student Login
router.post('/login', validate(loginSchema), login);

// Student Profile
router.get('/profile/:registerNumber', profile);

export default router;
