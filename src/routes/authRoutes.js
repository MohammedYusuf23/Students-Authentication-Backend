import express from 'express';
// import { signup, login, profile } from '../controller/authController.js'
import { signup } from '../controller/signup.js';
import { login } from '../controller/login.js';
import { profile } from '../controller/profile.js';
import { validate } from '../middleware/validate.js';
import { studentSchema } from '../validations/studentSchema.js';
import { loginSchema } from '../validations/loginSchema.js';
import { auth } from '../middleware/auth.js'
import { logout } from '../controller/logout.js';

const router = express.Router();

// Student Signup
router.post('/signup', validate(studentSchema), signup);

// Student Login
router.post('/login', validate(loginSchema), login);

// Student Profile
router.get('/profile', auth, profile);

// Student Logout
router.post('/logout', auth, logout);

export default router;
