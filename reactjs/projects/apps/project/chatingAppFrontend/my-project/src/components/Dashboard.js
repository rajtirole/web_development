import React, { useState } from 'react'
import Groups from './Groups'
import Chating from './Chating'
import Modal from './modal'

const Dashboard = () => {
  const dataa =JSON.parse(localStorage.getItem('user'))||[]
  const [user,setuser]=useState(dataa)
  const [data,setdata]=useState(0);
  // console.log(user);
  console.log(data);
  const [modal,setmodal]=useState(false)
  return (
    <div style={{display:'flex',height:'100vh',width:'100vw',overflow:'hidden'}} >
   <Groups user={user} setuser={setuser} modal={modal} setmodal={setmodal} data={data} setdata={setdata}></Groups>
   <Chating user={user} setuser={setuser} modal={modal} setmodal={setmodal} data={data} setdata={setdata}></Chating>
    <div>
   {modal&&<Modal  modal={modal} setmodal={setmodal} user={user} setuser={setuser}></Modal>}

    </div>
    </div>
  )
}

export default Dashboard