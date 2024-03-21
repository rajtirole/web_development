import mongoose,{ Schema, model } from "mongoose";
const jobSchema=new Schema({
    companyName:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    logoUrl:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    locationType:{
        type:String,
        required:true,
    },
    skills:{
        type:Array,
        required:true,
    },
    refUserId:{
        type:mongoose.ObjectId,
    }
},{
    timestamps:{createdAt:'createAt',updatedAt:'updatedAt'}
})
export default model('jobs',jobSchema)