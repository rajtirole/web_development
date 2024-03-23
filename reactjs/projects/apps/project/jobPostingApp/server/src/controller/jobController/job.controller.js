import Job from '../../model/jobModel/job.model.js'
async function createJob(req,res){ 
console.log('create job');
try {
    const {companyName,title,description,logoUrl,salary,location,duration,locationType,skills}=req.body;
    const refUserId=req.id;
    console.log(refUserId);
    if(!companyName||!title||!description||!logoUrl||!salary||!location||!duration||!locationType||!skills||!refUserId){
        return res.status(400).json({
            succes:false,
            message:'job create failed',
            data:'All feild are required'
        })
    }
    const data=await Job.create({
        companyName,title,description,logoUrl,salary,location,duration,locationType,skills,refUserId

    });
    (await data).save
    return res.status(200).json({
        succes:true,
        message:'job create success',
        data:data
    })
    
} catch (error) {
    console.log(error);

    return res.status(500).json({
        succes:false,
        message:'job create failed',
        data:error.message
    })
}
}
async function updateJob(req,res){ 
console.log('update job');
try {
    const UserId=req.params.jobId;
    const {companyName,title,description,logoUrl,salary,location,duration,locationType,skills}=req.body;
    const refUserId=req.id;
    console.log(UserId);
    console.log(companyName);
    console.log(refUserId);

    // if(!companyName||!title||!description||!logoUrl||!salary||!location||!duration||!locationType||!skills){
    //     return res.status(400).json({
    //         succes:false,
    //         message:'job create failed',
    //         data:'All feild are required'
    //     })
    // }
    const data=await Job.updateOne({_id:UserId,refUserId:refUserId},
        {
            $set:{
                companyName,title,description,logoUrl,salary,location,duration,locationType,skills
            }
        })
        const job=await Job.findOne({_id:UserId})

    console.log(data);
    console.log(job);
    return res.status(200).json({
        succes:true,
        message:'job update success',
        data:job
    })
    
} catch (error) {
    console.log(error);

    return res.status(500).json({
        succes:false,
        message:'job update failed',
        data:error.message
    })
}
}
async function getJob(req,res,next){
    console.log('get job');
    try {
        const UserId=req.params.jobId;
        if(!UserId){
            return res.status(400).json({
                succes:false,
                message:'job get failed',
                data:'not valid job '
            })
        }
        const job=await Job.findById(UserId)
        if(!job){
            return res.status(400).json({
                succes:false,
                message:'job get failed',
                data:'job not found'
            }) 
        }
        return res.status(200).json({
            succes:true,
            message:'job get success',
            data:job
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            succes:false,
            message:'job get failed',
            data:error.message
        })
    }
}
async function getJobsAll(req,res,next){
    console.log('get all job');
    try {
        const title=req.query.title||'';
        const companyName=req.query.companyName||'';
        const description=req.query.description||'';
        const salary=req.query.salary||'';
        const location=req.query.location||'';
        const duration=req.query.duration||'';
        const locationType=req.query.duration||'';
        const skills=req.query.skills;
        let filteredSkills;
        let filter={};
        if(skills){
            filteredSkills=skills.split(",")
            filteredSkills=filteredSkills.map(element=>{
                return new RegExp(element,"i")
            })
            filter={skills:{$in:filteredSkills}}
            // skils=skills.split(',');
            // skill={skills:{$in:skils}}

            
        }
        console.log(title,companyName,skills);
        // const job=await Job.find({title:{$regex:title,$options:'i'},...filter});
        // const job=await Job.find({skills:{$in:skills}});
        // const job=await Job.find({title:{$regex:title,$options:'i'},companyName:{$regex:companyName,$options:'i'}});
        const job=await Job.find({title:{$regex:title,$options:'i'},companyName:{$regex:companyName,$options:'i'},description:{$regex:description,$options:'i'},salary:{$regex:salary,$options:'i'},location:{$regex:location,$options:'i'},duration:{$regex:duration,$options:'i'},locationType:{$regex:locationType,$options:'i'},...filter});
        // const job=await Job.find({title:{$regex:title,$options:'i'},companyName:{$regex:companyName,$options:'i'},description:{$regex:description,$options:'i'},salary:{$regex:salary,$options:'i'},location:{$regex:location,$options:'i'},duration:{$regex:duration,$options:'i'},locationType:{$regex:locationType,$options:'i'}})   ;
        if(!job){
            return res.status(400).json({
                succes:false,
                message:'job get failed',
                data:'job not found'
            }) 
        }
        console.log(job);
        return res.status(200).json({
            succes:true,
            message:'job get success',
            data:job
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            succes:false,
            message:'job get failed',
            data:error.message
        })
    }
}
export {createJob,getJob,getJobsAll,updateJob}