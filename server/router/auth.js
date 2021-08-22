
const express =require('express');
const router= express.Router();
const bcrypt = require("bcryptjs");
const jwt =require('jsonwebtoken');
const authenticate=require('../middleware/authentication');

require('../db/conn');
const User = require("../model/userSchema");



router.post('/register',async (req, res)=>{
        
    const {name,email,phone,work,password,cpassword} =req.body;

    if(!name|| !email|| !phone|| !work|| !password || !cpassword){
        return res.status(422).json({error:"filled the field properly"});
    }

    try{

       const userExist = await User.findOne({email:email})

       if(userExist){
        return res.status(422).json({ error: "email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({error: "password not matching"})
        }else{
            const user= new User({ name,email,phone,work,password,cpassword});
            //password hash
    
    
            await user.save();
            
            res.status(201).json({message: "user registerd successfully"});
        }
       
        
    } catch(err){
        console.log(err);
    }

    
});


//login


router.post('/signin', async(req,res)=>{
        try{
            let token;
            const {email,password}= req.body;

            if(!email||!password){
                return res.status(400).json({error: "filled the data"})
            }
            const userLogin= await User.findOne({email:email});

           
            if(userLogin){
                const isMatch= await bcrypt.compare(password, userLogin.password);

                token = await userLogin.generateAuthToken();
                console.log(token)
                res.cookie("jwtoken", token,{
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly:true,
                })

                if(!isMatch){
                    res.status(400).json({error: "invaild Credientials"})
                }
                else{
                    res.json({message:"user signin successfully"})
                }
            } else{
                res.status(400).json({error: "invaild Credientials"}) 
            }
            
           



        } catch(err){
            console.log(err);
        }
});


router.get('/about',authenticate,(req,res)=>{
    console.log(`about`);
    
})
router.get('/getdata',authenticate,(req,res)=>{
    res.send(`hellow contact`);
    res.send(req.rootUser);
})


module.exports =router;