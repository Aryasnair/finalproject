import mongoose from "mongoose";

const prodouctSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true },
    image:{type:Array,required:true},
    category:{type:String,required:true},
    bestseller:{type:Boolean},
    date:{type:Number,required:true}

})
const prodouctModel = mongoose.models.prodouct || mongoose.model("prodouct",prodouctSchema)
module.exports=prodouctModel;