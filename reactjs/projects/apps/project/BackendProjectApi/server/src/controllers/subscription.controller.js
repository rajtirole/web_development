import Subscription from "../model/subscription.model.js";

const getsubscription=async(req,res)=>{
    try {
        const id=req.user._id
        const {channel}=req.params;
        const subscription=await Subscription.find({subscriber:id,userName:channel})
        if(!subscription){
            return res.status(200).json({
                success:false,
                message:"subscribe get not success"
            })
        }
        return res.status(200).json({
            success:true,
            message:"subscribe get success"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            error
        })
    }

}
const subscription=async(req,res)=>{
    try {
        const id=req.user._id
        const {channel}=req.params;
        const subscription=await Subscription.create({subscriber:id,channel:channel})
        if(!subscription){
            return res.status(200).json({
                success:false,
                message:"subscribe get not success"
            })
        }
        return res.status(200).json({
            success:true,
            message:"subscribe get success"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            error
        })
    }

}
export {subscription,getsubscription}