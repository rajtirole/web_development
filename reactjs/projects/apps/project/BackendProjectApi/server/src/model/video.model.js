import mongoose from 'mongoose'
import aggregate from 'mongoose-aggregate-paginate-v2'
const videoSchema=new mongoose.Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
      
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})
videoSchema.plugin(aggregate)
export const Video=mongoose.model('Video',videoSchema)