const asyncHandler= (func)=>async (req,res,next)=>{
try {
    await func()
} catch (error) {
    res.status(err.code||500).json({
        success:false,
        message:err.message
    })
    
}
}
export {asyncHandler}