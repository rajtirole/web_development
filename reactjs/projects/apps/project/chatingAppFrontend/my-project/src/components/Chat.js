import React, { useState } from 'react'
import chat from '../assets/Vector (5).png'
import './Chat.css'
const Chat = ({ele='',color='#43E6FC',modal,setmodal,data,setdata,user,setuser}) => {
    // const groups=['chat','chat','chat','chat']
    // console.log(data);
    const date  =       new Date().toLocaleDateString();
    const datee  =           new Date().toLocaleTimeString('en-US', { hour12: false, 
        hour: "numeric", 
        minute: "numeric"});


    // console.log(typeof d);
    console.log(date);
    console.log(datee);
    const [dataaa,setdataaa]=useState('')
    // let data=localStorage.getItem('member')
    // let data={
    //     name:'chating group',
    //     color:'red',
    //     message:[
    //         {
    //         message:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    //         {
    //         message:'message',
    //         date:'19/02/2001',
    //         time:'10:00AM'
    //     },
    // ]

    // }
    console.log(data);
    let name=user[data-1].name||''
    console.log(name);
  return (
  <>
    <div className='chatContainer' onClick={()=>{
        if(modal){
          setmodal(false)
        }
  
      }}>
        <div className='headingContainer'>
        <div  style={{
          borderRadius: "100%",
          backgroundColor: user[data-1].color,
          height: "40px",
          padding: "10px",
          width: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffff",
          fontSize:'1.5rem'
        }}>{`${name[0]}${name[name.length-1]}`}</div>
        <div>{name}</div>
        </div>
        {<div className='messageContainer'>
            {user[data-1].message&& user[data-1].message.map((data,index)=>{
                // console.log(user);
                    return (
                        <div className='container'>
                           <div> {data.message}</div>
                           <div style={{position:'relative',left:'75%',width:'fit-content',color:'#353535',marginTop:'10px'}}>{data.date}  {data.time}</div>
                        </div>
                    )
                })
                
            }
        </div>}
        <div className='chat'>
            <div style={{backgroundColor:"#FFFF"}}>
            {/* <input placeholder='Enter your text here...........'></input> */}
            <textarea placeholder='Enter your text here...........' onChange={(e)=>{setdataaa(e.target.value)} } value={dataaa}></textarea>
            <img src={chat} style={{height:'15px',width:'20px',padding:'10px',color:'#001F8B'}}onClick={()=>{
                // localStorage.setItem('member')
                let dataaaa=user;
                let dataaaaa;
                dataaaaa=dataaaa.map((element,index)=>{
                    if(element.id==data){
                        // let arr=[...element.message]
                        console.log(element);
                        return {id:element.id,name:element.name,color:element.color,message:[...element.message,{message:dataaa,date:date,time:datee}]}
                    }else{
                    return element;}
                })
                // console.log(dataaaaa);
                setuser(dataaaaa)
                // setuser((prev)=>{
                //     return [...prev,{name:name,color:color,id:prev.length+1}]
                //   })
                  console.log(user);
                  localStorage.setItem('user',JSON.stringify(user))
                //   console.log(localStorage.setItem('user',JSON.stringify(user)));
                  setdataaa('')
                  let userr=localStorage.getItem('user')
                  let id=data.id;
                  userr=JSON.parse(userr)
                  console.log(userr[0].name);
                  console.log(data);
                  let a=userr[id]
                //   setdata(a)
                //   console.log(data);
                //   console.log(typeof data);
            }}></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Chat