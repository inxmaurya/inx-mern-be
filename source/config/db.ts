import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      retryWrites: false, // Disable retryable writes
      connectTimeoutMS: 10000,
      authSource: "admin",
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
