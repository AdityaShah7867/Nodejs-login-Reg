const User = require("../Models/User")
const jwt = require("jsonwebtoken")
const register = async (req,res)=>{
    const {email} = req.body 
    const user = await User.findOne(
        {email}
    )
    if(user){
        res.status(401).json("User already exists")
        return
    }
    const newUser = await User.create(
        req.body
    ) 
    res.status(201).json(newUser)
}

const login = async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne(
        {email}
    )
    if(!user){
        res.status(401).json("User Doesnt Exist!")
    }
    else if(password === user.password){
        const Token=jwt.sign({user},process.env.JWT,{expiresIn:'1d'})
        res.status(200).json({message:"congo",Token:Token})
    }
    else{
        res.status(401).json("email and password Doesnt Match!")
    }
}


module.exports = {register,login}