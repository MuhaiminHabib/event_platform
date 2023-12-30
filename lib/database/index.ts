import mongoose from "mongoose";
import { Monda } from "next/font/google";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("Mongodb uri missing error");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "eventlycluster",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
