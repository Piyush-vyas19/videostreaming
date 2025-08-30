import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
 export const db_connection = async () => {
     try {
         await mongoose.connect(process.env.DB_URI, {
             useNewUrlParser: true,
             useUnifiedTopology: true
         });
         console.log("Database connected successfully");
     } catch (error) {
         console.error("Database connection failed:", error);
         process.exit(1);
     }
};


