const Product = require("../Models/Product")



const addP = async (req,res) =>{

    const {name,desc,price }= req.body;

    if( !name || !desc || !price){
        res.status(401).json('All values not fulfilled')
        return ;
    }
     
    const newP = await Product.create(
        req.body
    )
    res.status(201).json(newP)
}

const getP = async (req,res) =>{
    const newP = await Product.find()
    res.status(201).json(newP)
}



module.exports = { addP, getP }