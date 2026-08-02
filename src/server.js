import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'https://students-authentication-project.vercel.app',
    credentials: true,
  })
);

// Routes
app.use('/', authRoutes);

// Connect Database
await connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});
