import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully 🚀");
  } catch (error) {
    console.log(error);
    console.log("MongoDB connection failed ❌");
  }
};

export default connectDB;
