import mongoose from "mongoose";
import { config } from "dotenv";
config();

const MONGO_URI = process.env.mongoDBURL || "";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB conectado!");
    } catch (err) {
        console.error("Erro ao conectar:", err);
    }
};