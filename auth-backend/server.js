import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


dotenv.config();
connectDB();

const app = express();
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Welcome to the Auth Backend');    
});


app.listen(process.env.PORT || 5000, () => {
    console.log(`the server is running on http://localhost:${process.env.PORT}`);
});