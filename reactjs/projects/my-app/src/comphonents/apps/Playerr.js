import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react';
import { useRef } from 'react';
const reducer=(state,action)=>{
    console.log(state);
    switch (action.type){
        case 'increase':
            return {count:state.count+1, num:state.num,number:state.number}
        case 'increasee':
            return {count:state.count, num:state.num+1,number:state.number}
            default: return {count:state.count, num:state.num,number:state.number}
    }
}
function Playerr() {
    let aa=useRef(null)
    console.log(aa);
    // let [num,setnum]=useState(0)
    let [state,dispatch]=useReducer(reducer,{count:0,num:[],number:1})

    // console.log(reducer);
    // const a=()=>{
    //    setnum(num=num+1)
    //     // console.log(num);
    // }
  return (
    <>
    <button onClick={()=>{
        dispatch({type:"increase"})
        
    }}>increse {state.count}</button>
    <button onClick={()=>{
        dispatch({type:"increasee"})
        
    }}>increse {state.num}</button>
    <button onClick={()=>{
        dispatch({type:"increase"})
       
    }}>increse {state.number}</button>
   <div>{state.num}</div>
   <div>{state.number}</div>
   <div>{state.count}</div>
   {/* <button onClick={}>reference</button> */}




   </>
  )
}

export default Playerr