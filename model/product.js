const mongoose = require('mongoose');
const schema ={
productId:{type:String, default:null, required :true},
productName:{type:String, default:null, required :true},
productPrice:{type:Number, default:null, required :true},
productQuantity:{type:Number, unique:true, required :true},
deleted:{type:boolean,default:false}
};

const productSchema = new mongoose.Schema(schema);
const Product = mongoose.model('product',productSchema);

module.exports = Product;