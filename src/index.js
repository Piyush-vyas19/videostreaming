import express from 'express'
import { db_connection } from '../src/db/db.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express();

db_connection();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
