import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const RegisterForm = () => {
    const [formValues,setformValues]=useState({
    name:"",
    username:"",
    email:"",
    number:"",
    registerbox:false,
})
    const [errors,seterrors]=useState({
    name:null,
    username:null,
    email:null,
    number:null,
    registerbox:null,
})
function submitHandler(){
    
    let iserror=false;

    if(formValues.name.length<8){

        seterrors((prev)=>{
           return {...prev,name:'Name should be 8 charcter'} 
        })
        iserror=true;
    }
    
    else {

         seterrors((prev)=>{
            return {...prev,name:null}
        })
    }

    if(formValues.username.length<8){
        seterrors((prev)=>{
           return {...prev,name:'username should be 8 charcter'} 
        })
        iserror=true;
    }
    else {
        seterrors((prev)=>{
            return {...prev,username:null}
        })
    }


    if(formValues.email.length<8){
        seterrors((prev)=>{
           return {...prev,email:'email should contain mail only'} 
        })
        iserror=true;
    }
    else {
        seterrors((prev)=>{
            return {...prev,email:null}
        })
    }
    if(formValues.number.length<8){
        seterrors((prev)=>{
           return {...prev,number:'number should contain only numbers'} 
        })
        iserror=true;
    }
    else {
        seterrors((prev)=>{
            return {...prev,number:null}
        })
    }
    if(formValues.registerbox==false){
        seterrors((prev)=>{
           return {...prev,registerbox:'please check the box'} 
        })
        iserror=true;
    }
    else {
        seterrors((prev)=>{
            return {...prev,registerbox:null}
        })
    }
    if(iserror){
        console.log('erorjdslfkj');
        return
        
    }
    else{
        console.log('navigalkjfkj');
        window.localStorage.setItem('userinfo',JSON.stringify(formValues))
        navigate('/info')
    }
}
let navigate=useNavigate()

  return (
    <div>
        <input type='text' onChange={(e)=>{setformValues((prev)=>{return {...prev,name:e.target.value}})}} placeholder='Name' value={formValues.name} ></input>
        <p>{errors.name}</p>
        <input type='text' onChange={(e)=>{setformValues((prev)=>{return {...prev,username:e.target.value}})}} placeholder='Username' value={formValues.username}></input>
        <p>{errors.username}</p>
        <input type='text' onChange={(e)=>{setformValues((prev)=>{return {...prev,email:e.target.value}})}} placeholder='Email' value={formValues.email}></input>
        <p>{errors.email}</p>
        <input type='text' onChange={(e)=>{setformValues((prev)=>{return {...prev,number:e.target.value}})}} placeholder='Number' value={formValues.number}></input>
        <p>{errors.number}</p>
        <label htmlFor='registerbox' >Share my registration data with SuperApp </label>
        <input type='checkbox' id='registerbox' checked={formValues.registerbox} onChange={(e)=>{setformValues((prev)=>{return {...prev,registerbox:e.target.checked}})}}></input>
        <p>{errors.registerbox}</p>
        <button onClick={submitHandler}>Sign Up</button>
    </div>
  )
}

export default RegisterForm