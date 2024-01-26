import React from 'react'
import './Signup.css'
import'./Signup.css'
import axios from 'axios'
import { useState ,useReducer} from 'react';
function reducer(state,action){
  if(action.type=='name'){
      // let newVlaue=state.name+action.payload
      console.log(state.name);
      return  {...state,name:action.payload}
  }
  else if(action.type=='email'){
    console.log(action.payload);
    return  {...state,email:action.payload}
  }
  else if(action.type=='password'){
    return  {...state,password:action.payload}
  }
  else if(action.type=='confirmPassword'){
    return  {...state,confirmPassword:action.payload}
  }
  return {...state}
  // throw Error('Unknown action.');
}
const handleSubmit = async({state,e,email,password,signin,signup}) => {
  e.preventDefault();
  
  console.log(email);
  console.log(password);
  
  // store the states in the form data




  if (signup) {
    // const loginFormData = new FormData();
    // loginFormData.append("fullName", state.name)
    // loginFormData.append("email", state.email)
    // loginFormData.append("password", state.password)
    // loginFormData.append("confirmPassword", state.confirmPassword)
    // console.log('signup');
    let dataa ={fullName: state.name, email: state.email, password:state.password}
    try {
      // make axios post request
      // const response = await axios({
      //   method: "post",
      //   url: "http://localhost:5400/ping",
      //   data: state,
      //   headers: { "Content-Type": "application/json" ,
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Request-Headers": 'Content-Type,'
      // },
      // });
      // console.log(response);
      // let data = JSON.stringify({
      //   username: "name",
      //   password: 'password'
      // });
  
      // const res = await axios.post('http://localhost:5400/ping')
      const res = await axios.post('http://localhost:5400/api/v1/user/register',dataa)
    console.log(res);
    } catch(error) {
      // console.log(" ejlakfjeli")
      console.log(error.response)
    }
  } else if(signin) {
    console.log('sign in');
    try {
      let dataa ={email:email, password:password}
      const res = await axios.post('http://localhost:5400/api/v1/user/login',dataa)
      console.log(res);
    } catch (error) {

      console.log(error);
      
    }

    
  }
 
}

const SigninComphonent = ({signin}) => {
  // signin=true;
  // console.log(signin);
let [email,setemail]=useState('')
let [password,setpassword]=useState('')
  return (
    <> <form className='formsignup w-full h-full flex flex-col items-center justify-center gap-10'>
     
      <label htmlFor ='email' >Email
       <input placeholder='Name' id='Name' name='email' value={email} onChange={(e)=>{
       setemail(e.target.value);
       }}></input></label>
      <label htmlFor ='password' >Password
       <input placeholder='password' id='password' name='password' value={password} onChange={(e)=>{
       setpassword(e.target.value);
       }}></input></label>


       <div className='btn-signup'> 
        <button type='submit' onClick={(e)=>{
         
          handleSubmit({e,email,password,signin})

        }}>Sign-In</button>

    </div>
      </form> </>
  )
}
const SignUp = ({signup}) => {
  // signup = false;
  // console.log(signup);
  const [state, dispatch] = useReducer(reducer, { name:'',email:'',password:'',confirmPassword:'' });

  return (
    <><form>
    <div className='signup'>
        <label htmlFor ='Name' >Name
       <input placeholder='Name' id='Name' name='Name' value={state.name} onChange={(e)=>{
        dispatch({ type: 'name' ,payload:e.target.value})
       }}></input></label>
        <label htmlFor='Email'>Email
       <input placeholder='Email' id='Email' name='Email' type='email' value={state.email} onChange={(e)=>{
        dispatch({ type: 'email' ,payload:e.target.value})
       }}></input></label>
        <label htmlFor='Password'>Password
       <input placeholder='Password' id='Password' name='Password'  type='password' value={state.password} onChange={(e)=>{
        dispatch({ type: 'password' ,payload:e.target.value})
       }}></input></label>
        <label htmlFor='confirmPassword'>Confirm Password
       <input placeholder='confirm Password' id='confirmPassword' type='password' name='confirmPassword' value={state.confirmPassword} onChange={(e)=>{
        dispatch({ type: 'confirmPassword' ,payload:e.target.value})
       }}></input></label>
      
    </div>
    <div className='btn-signup'> 
        <button type='submit' onClick={(e)=>{
          handleSubmit({state,e,signup})

        }}>Sign-Up</button>
    </div>
    </form></>
  )
}

export {SigninComphonent,SignUp} 