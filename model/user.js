const mongoose = require('mongoose');
const schema ={
firstName:{type:String, default:null, required :true},
lastName:{type:String, default:null, required :true},
username:{type:String, default:null, required :true},
email:{type:String, unique:true, required :true},
password:{type:String,required :true},
phone:{type:Number,required:true},
location:{type:String,required:true},
};

const userSchema = new mongoose.Schema(schema);
const User = mongoose.model('user',userSchema);

module.exports = User;