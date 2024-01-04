const express = require('express');
const connectDB = require('./connectDB/db');
const userLogReg = require('./routes/userLogReg');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const ProductCategoryRouter = require('./routes/Products');
require('dotenv').config();
const PORT = process.env.PORT;

connectDB() //batabase connection.
app.use(bodyParser.json()) //body perser connected

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}));

app.use('/api',userLogReg);
app.use('/admin',ProductCategoryRouter);


app.listen(PORT,()=>{
    console.log(`server running with ${PORT}.`)
})