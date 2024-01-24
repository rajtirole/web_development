import{Schema,model} from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
import crypto from 'crypto';
config();
const userSchema = new Schema({
    fullName:{
        type: 'string',
        required: [true, 'name is required'],
        minLength:[5, 'min length is 5 characters'],
        maxLength:[50, 'max length is 50 characters'],
        
        lowercase:true,
        trim:true
    },
    email: {
        type: 'string',
        required: [true, 'email is required'],
        unique: true,
        lowercase:true,
        trim:true,
        // match :' 

    },
    password: {
        type: 'string',
        required: [true, 'password is required'],
        minLength:[8, 'min length is 8 characters'],
        select:false
    },
    avatar:{
        public_id: {
            type: 'string',
        },
        secure_url:{
            type: 'string',
        }
    },
    role:{
        type: 'string',
        enum: ['USER', 'ADMIN'],
        default:'USER'
    },
    subscriptions:{
        type:'boolean'
    },
    forgotPasswordToken:String,
    forgotPasswordExpires:Date
    // timestamps:true,
},
{
    timestamps:true
});
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password=await bcrypt.hash(this.password,10)

})
userSchema.methods={
    generateJWTToken:async function (){
        return await jwt.sign({
            id:this._id,
            email:this.email,
            subscription:this.subscription,
            role:this.role
        },
        process.env.JWT_SECRET,
        {
        expiresIn:process.env.JWT_EXPIRY
        }
        )

    },
    comparePassword: async function(plainPassword){
        // console.log(plainPassword);
        // console.log(this.email);
        return await bcrypt.compare(plainPassword, this.password)
    },
    generatePassToken:async function(){
        const token=crypto.randomBytes(20).toString('hex')
        this.forgotPasswordToken=crypto.createHash('sha256').update(token).digest('hex')
        this.forgotPasswordExpires = Date.now()+ 15*60*1000;
        return token;
    }   
}
const User=model('User5',userSchema)
export default User;