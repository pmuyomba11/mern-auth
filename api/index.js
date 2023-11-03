import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();
const PORT = process.env.PORT;
import morgan from 'morgan'
import color from 'colors'
const app = express();


//Middleware...
app.use(express.urlencoded({ extended: true }))
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use(morgan('dev'))


//DATABASE Connect
mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Database Connected...'.green.inverse);
}).catch((err) => {
    console.log(err.message.red);
})

//////////////Error Handling...///////////
app.use((err, req, res, next) => {
    const message = err.message || 'Internal Server Error'
    const statusCode = err.statusCode || 500

    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})
//////////////////////////////////////////
//Port Listening...
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}...`.inverse.bold.blue)
})