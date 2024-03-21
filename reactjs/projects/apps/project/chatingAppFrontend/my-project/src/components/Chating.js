import React from 'react'
import Chat from './Chat'
import image from '../assets/image-removebg-preview 1.png'
import encrypt from '../assets/Vector (4).png'

const Chating = ({modal,setmodal,data,setdata,user,setuser}) => {
  let ele='dataaaa'
  console.log(data)
  return (
    <>
      {
      data?<Chat modal={modal} setmodal={setmodal} data={data} setdata={setdata} user={user} setuser={setuser}></Chat>:(
        <div onClick={()=>{
          if(modal){
            setmodal(false)
          }
    
        }} style={{height:'100vh',width:'100%',backgroundColor:'#DAE5F5',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontWeight:'500'}}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'20px',gap:'10px'}}>
          <img src={image}  style={{height:'80%',width:'60%'}}></img>
          <h1 style={{margin:0,padding:0}}>Pocket Notes</h1>
          <p style={{width:'60%',margin:'0',padding:'0',color:'#292929'}}>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        {/* <div>
         
        </div> */}
        <div>
        </div>
        <div style={{display:'flex',alignItems:'center',position:'absolute',bottom:'30px',gap:'20px'}}><img src={encrypt}></img>
        <p>end-to-end encrypted</p></div>
        </div>
      )
      
      
      }
    </>
  )
}

export default Chating