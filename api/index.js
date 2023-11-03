import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
dotenv.config();
const PORT = process.env.PORT;
import morgan from 'morgan'
import color from 'colors'
const app = express();


//Middleware...
app.use('/api/user', userRoutes)
app.use(morgan('dev'))


//DATABASE Connect
mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Database Connected...'.green.inverse);
}).catch((err) => {
    console.log(err.message.red);
})


//Port Listening...
app.listen(PORT, () =>{
    console.log(`Server is running on PORT: ${PORT}...`.inverse.bold.blue)
})