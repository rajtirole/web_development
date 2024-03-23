import { asyncHandler } from "../utils/asyncHandler.js"

const register =asyncHandler(async (req,res,next)=>{
    res.status(200).json({
        success:true
    })
})
export {register}