import {createJob,getJob,getJobsAll,updateJob} from '../../controller/jobController/job.controller.js'
import { Router } from 'express'
import auth from '../../middleware/auth.js'
const route=Router()
route.post('/createJob',auth,createJob)
route.post('/updateJob/:jobId',auth,updateJob)
route.get('/getJob/:jobId',auth,getJob)
route.get('/getJobsAll',getJobsAll)
export default route