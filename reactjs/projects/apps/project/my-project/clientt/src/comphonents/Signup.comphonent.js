import React from 'react'
import './Signup.css'
import axios from 'axios'
import { useState ,useReducer} from 'react';
import {SigninComphonent,SignUp} from './Signin.comphonent'
const SignupComphonent = () => {
 let [signup,setsignup] = useState(true)
  return (
    <>
    <div className='Container flex flex-col gap-8 h-screen justify-center items-center w-[80%] '>
    <div className='quiz text-3xl '>QUIZZIE</div>
    <div className='innerContainer h-3/4 flex flex-col items-center gap-10' >
        <div className='signinsignup'>
            <button onClick={()=>{setsignup(true)}} >Sign Up</button>
            <button  onClick={()=>{setsignup(false)}}>Log In</button>
        </div>
        {signup?<SignUp signup='true'></SignUp>:<SigninComphonent signin='true'></SigninComphonent>}
    </div>
    </div>

    
    </>
  )
}

export default SignupComphonent