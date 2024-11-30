import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import vehicleRoutes from './routes/vehicleRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { authenticate } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/vehicles', authenticate, vehicleRoutes);
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
