import 'dotenv/config'
import mongoose from "mongoose";
mongoose.set('strictQuery',false);
async function connectionToDB(){
    // let mongoose=process.env.MONGODB_URL
    // console.log(mongoose);
    // await mongoose.connect(mongoose);
    // await mongoose.connect('mongodb://127.0.0.1/my_database');


    try {
        const { connection }=await mongoose.connect(process.env.MONGODB_URL||`mongodb://127.0.0.1:27017/lms`)
        if(connection){
            console.log(`coonected to connect to ${connection.host}`);
            // console.log(`coonected to connect to ${connection.host},${process.env.MONGODB_URL}`);
        }
       
    } catch (error) {
        console.log(error.message,'mongodb connection failed');
        process.exit(1)
        
    }

}
export default connectionToDB;