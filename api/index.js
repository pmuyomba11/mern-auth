import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const PORT = process.env.PORT;
import morgan from 'morgan'
import color from 'colors'
const app = express();


//Port Listening...
app.listen(PORT, () =>{
    console.log(`Server is running on PORT: ${PORT}...`.inverse.bold.blue)
})