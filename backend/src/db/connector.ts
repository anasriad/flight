import mongoose from "mongoose";
import dotenv from "dotenv";

export default async function MongoConnector() {
   dotenv.config();

   const mongoDBURI = process.env.MONGO_URI

   if (!mongoDBURI) throw new Error('MONGO_URI not defined in .env file');

   try {
      await mongoose.connect(mongoDBURI!);

   } catch (error) {

   }
}