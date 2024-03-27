import mongoose from 'mongoose'
const subscriptionSchema=new mongoose.Schema({
    subscriber:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    channel:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})
const Subscription=mongoose.model('Subscription',Subscription)
export default Subscription