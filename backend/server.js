const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongodb.js');
const connectCloudinary  = require('./config/cloudinary');
const userRouter =require('./routes/userRoutes.js')
require('dotenv').config();

//App config
const app = express()
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();
//Middlewares

app.use(express.json())
app.use(cors())

//api end points

app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=> console.log('server started on PORT : '+port))
