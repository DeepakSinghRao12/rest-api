const Product = require("../models/productModel");

const productController ={
    async index(req,res, next) {
        let product;
        try{
            product = await Product.find();
        }catch (error) {
            res.status(500).json({ error: "Server error", serverError:error});
    
        }
        res.status(200).json(product);
    },
    async store(req,res,next){
        let product;
        try {
            const {Category, SCategory, PName, PPrice} = req.body;
            cat = Product.create({Category,SCategory, PName, PPrice})
        }catch (error) {
            res.status(500).json({ error: "Server error", serverError:error});
        }
        res.status(201).json(product);
    },
    async delete(req,res,next){
        let product;
        try {
            const {id} = req.body;
            product = await Product.findByIdAndDelete({_id :id})
        }catch (error) {
            res.status(500).json({ error: "Server error", serverError:error});
        }
        res.status(200).json(product);
    }
}

module.exports = productController;
