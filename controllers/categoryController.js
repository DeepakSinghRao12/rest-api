const Category = require("../models/categoryModel");

const categoryController = {

async index(req,res, next) {
    let categories;
    try{
        categories = await Category.find();
    }catch (error) {
        res.status(500).json({ error: "Server error", serverError:error});

    }
    res.status(200).json(categories);
},

async store(req,res,next){
    let cat;
    try {
        const {title, description} = req.body;
        cat =  await Category.create({
            title,
            description,
        thumbnail: "uploads/category/thumbnail/"+req.file.filename,
    });
    }catch (error) {
        res.status(500).json({ error: "Server error", serverError:error});
    }
    res.status(201).json(cat);
},
async delete(req,res,next){
    let cat;
    try {
        const {id} = req.body;
        cat = await Category.findByIdAndDelete({_id :id})
    }catch (error) {
        res.status(500).json({ error: "Server error", serverError:error});
    }
    res.status(200).json(cat);
},
async update(req,res,next){
    let cat;
    try {
        const {id} = req.params;
        const {title,description} = req.body;
        cat = await Category.findByIdAndUpdate({_id:id},{title,description},)
    }catch (error) {
        res.status(500).json({ error: "Server error", serverError:error});
    }
    res.status(200).json(cat);
},
async get(req,res, next) {
    let categories;
    try{
        const {id} = req.params;
        categories = await Category.findById({_id:id});
    }catch (error) {
        res.status(500).json({ error: "Server error", serverError:error});

    }
    res.status(200).json(categories);
},
async getTitle(req,res, next) {
    let categories;
    try{
        const {title} = req.params;
        categories = await Category.find({title: title});
    }catch (error) {
        res.status(500).json({ error: "Server error", serverError:error});

    }
    res.status(200).json(categories);
},
}

module.exports = categoryController;
