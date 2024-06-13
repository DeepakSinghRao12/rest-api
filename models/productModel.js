const {mongoose} =require("mongoose");
const Schema =mongoose.Schema;
const productSchema = new Schema({
    Category:{type:String},
    SCategory:{type:String},
    PName:{type:String},
    PPrice:{type:String},

}
)


const Product =mongoose.model("Product",productSchema);
module.exports=Product;