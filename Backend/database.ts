"use server"

import mongoose from "mongoose";

const uri = process.env.MONGODB_URL;

if (!uri) {
    throw new Error("MONGODB_URL environment variable is not set");
}

const connectToDB = async () => {
    try {
        await mongoose.connect(uri);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};
export default connectToDB;