import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
import taskRoutes from './routes/taskRoutes.js';
import userRoutes from './routes/userRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/settings', settingsRoutes);

// Error handling middleware
import { errorHandler } from './middlewares/errorMiddleware.js';
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});