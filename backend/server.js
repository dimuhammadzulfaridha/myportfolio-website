import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Import Routes
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import certificationRoutes from './routes/certificationRoutes.js';

// Import Middleware
import { upload } from './middleware/uploadMiddleware.js';
import { protect } from './middleware/authMiddleware.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/certifications', certificationRoutes);

// File Upload Route (Cloudinary)
app.post('/api/upload', protect, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).send({ message: 'No file uploaded.' });
  res.status(200).send({ imageUrl: req.file.path });
});

// Root Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 3000;

// For Vercel Serverless Functions, we export the app
// If we run locally, we start the server
if (process.env.NODE_ENV !== 'production' || process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
