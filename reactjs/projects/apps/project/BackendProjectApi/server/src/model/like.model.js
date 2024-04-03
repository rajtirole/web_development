import mongoose from 'mongoose'
const likeSchema=new mongoose.Schema({
    video:{
        type:mongoose.Types.ObjectId,
        ref:"Video"
    },
    comment:{
        type:mongoose.Types.ObjectId,
        ref:"Comment"
    },
    tweet:{
        type:mongoose.Types.ObjectId,
        ref:"Tweet"
    },
    liked:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },

},{timestamps:true})
const Like=mongoose.model('Like',likeSchema)
export default Like