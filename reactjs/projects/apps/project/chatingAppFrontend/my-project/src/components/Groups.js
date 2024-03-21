import React from 'react'
import './Groups.css'
import GroupName from './GroupName'
import chating from '../assets/+.png'
import Modal from './modal'
const Groups = ({user, setuser,modal,setmodal,data,setdata}) => {
//     const groups=['mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote','mynote']
//   let color=['#0047FF','#B38BFA','#FFC0C0','#43E6FC','#F19576','#6691FF','#FF66F0']
  let chat=-1;
  return (
    <div className='GroupsContainer' onClick={()=>{
        if(modal){
          setmodal(false)
        }
  
      }} >
        <h1>Pocket Notes</h1>

        <div>
            {
                
                user.map((ele,index)=>{
                   
                    // console.log(chat);
                    // if(index>=color.length){
                    //     console.log('index',index);
                    //     console.log('groups',color.length);
                    //     chat=index-color.length
                    //     console.log('chats',chat);
                    // }else{
                    //     chat=index;
                    //     console.log('chatfasdas',chat);
                    // }
                   
                    return <GroupName name={ele.name} color={ele.color} user={user} ele={ele} data={data} setdata={setdata}></GroupName>
                })
            }
        </div>
        <img src={chating} style={{position:'absolute',height:'20px',width:'20px',borderRadius:'100%',backgroundColor:'#16008B',padding:'20px',bottom:'20px',left:'15%',}} onClick={(e)=>{
            console.log(modal);
            setmodal(()=>{
                return true
            })
            console.log(setmodal);
        }}></img>
    </div>
  )
}

export default Groups