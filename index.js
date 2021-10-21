const express = require('express');
const cors = require('cors')
require('dotenv').config()
const router = require('./routes/todo');
const connectDB = require('./config/db')
const app = express();

//database connection
connectDB();
app.use(cors())
app.use(express.json());
app.use('/api',router);


app.listen(process.env.PORT || 3000,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})