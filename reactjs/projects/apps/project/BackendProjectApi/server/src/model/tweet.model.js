import mongoose from 'mongoose'
const tweetSchema=new mongoose.Schema({
        content:{
            type:String,
            required:true
        },
        owner:{
            type:mongoose.Types.ObjectId,
            ref:"User"
        }
},{timestamps:true})
const Tweet=mongoose.model("Tweet",Tweet)
export default Tweet
