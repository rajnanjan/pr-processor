import  mongoose from 'mongoose';
import 'dotenv/config.js';
const db_url = process.env.DB_URL
export const connectDB = async () => {
  try {
    await mongoose.connect(db_url);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

