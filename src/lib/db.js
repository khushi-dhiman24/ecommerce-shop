import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState) return; // agar already connected ho to return

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ecommerce"
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
  }
}

export default connectDB;
