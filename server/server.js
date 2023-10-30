var express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
require('dotenv').config();
const AuthRoutes =  require('./Routes/Auth')



const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 4000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Mongo Connected ...'))
    .catch((err)=> console.log(err));


app.use('/api/v1/auth',AuthRoutes)


app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}`)});