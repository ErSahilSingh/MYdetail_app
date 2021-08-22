const dotenv = require('dotenv');
const mongoose=require('mongoose');
const express =require('express');
const app = express();




//database
dotenv.config({ path:'./config.env'});
require('./db/conn');
//const User=require('./model/userSchema');


app.use(express.json());
//router files
app.use(require('./router/auth'));

const PORT= process.env.PORT;



//middleware

const middleware=(req,res,next)=>{
        console.log(`hello middleware`);
        next();
}










app.listen(5000, ()=>{
    console.log(`server is running at port NO. ${PORT}`)
})