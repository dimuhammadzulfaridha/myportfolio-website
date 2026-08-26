import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Seed default admin user if not exists
    const adminExists = await User.findOne({ email: 'admin@example.com' });
    if (!adminExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('password123', salt);
      await User.create({ email: 'admin@example.com', password: hashedPassword });
      console.log('Default Admin Seeded: admin@example.com / password123');
    }
    
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Removed process.exit(1) to prevent Vercel crashes
  }
};

export default connectDB;
