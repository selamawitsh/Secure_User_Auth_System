import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';


dotenv.config();
connectDB();

const app = express()
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);


app.listen(process.env.PORT || 5000, () => {
    console.log(`the server is running on http://localhost:${process.env.PORT}`);
});