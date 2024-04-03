import mongoose from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'
const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    video:{
        type:mongoose.Types.ObjectId,
        ref:"Video"
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
})
commentSchema.plugin(mongooseAggregatePaginate)
const Comment=mongoose.model('Comment',commentSchema)
export default Comment;