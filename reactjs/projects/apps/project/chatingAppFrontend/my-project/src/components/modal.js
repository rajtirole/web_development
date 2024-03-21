import React, { useState } from "react";

const Modal = ({ isOpen, onClose, modal, setmodal,user,setuser }) => {
  // State to manage modal visibility
  const [isVisible, setIsVisible] = useState(modal);
  const [color, setcolor] = useState('#0047FF');
  const [name, setname] = useState('');
  const [data, setdata] = useState({});
  

function handleSubmit(){
     
}
  // Handle close button click
  //   const handleClose = () => {
  //     setIsVisible(false);
  //     onClose(); // Call the callback prop to notify parent component
  //   };

  return (
    <div
      className={`modal ${isVisible ? "active" : ""}`  }
      style={{
        height: "30%",
        width: "40%",
        position: "absolute",
        right: "0",
        left: "0",
        top: 0,
        bottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        alignSelf: "center",
        display: "flex",
        
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding:'20px 30px',
        border: '2px solid #CCCCCC',
        justifyContent:'space-between',
        fontWeight:'500'
      }}
    >
      {" "}
      {/* Apply 'active' class conditionally */}
        <h2 style={{margin:'0',padding:'0'}}>Create New group</h2> {/* Assuming a heading */}
          {" "}
          {/* Assuming there's a form */}
          <div style={{display:'flex' ,gap:'20px',alignItems:'center'}}><label htmlFor="groupName">Group Name</label>
          <input placeholder="Enter group name" type="text" id="groupName" value={name} name="groupName" style={{width:'50%',border: '2px solid #CCCCCC',borderRadius:'10px',color:'#979797',padding:'5px'}} onChange={(e)=>{
            setname(e.target.value)
          }}/></div>
          <div style={{display:'flex',gap:'20px',alignItems:'center'}}><h3>Choose colour</h3>
          <div style={{display:'flex',gap:'5px'}}>
          {/* let color=['#0047FF','#B38BFA','#FFC0C0','#43E6FC','#F19576','#6691FF','#FF66F0'] */}
            <div style={{backgroundColor:'#0047FF',height:'30px',width:'30px',borderRadius:'100%'}} onClick={(e)=>{setcolor(e.target.style.backgroundColor)}}></div>
            <div style={{backgroundColor:'#B38BFA',height:'30px',width:'30px',borderRadius:'100%'}} onClick={(e)=>{setcolor(e.target.style.backgroundColor)}}></div>
            <div style={{backgroundColor:'#FFC0C0',height:'30px',width:'30px',borderRadius:'100%'}} onClick={(e)=>{setcolor(e.target.style.backgroundColor)}}></div>
            <div style={{backgroundColor:'#43E6FC',height:'30px',width:'30px',borderRadius:'100%'}} onClick={(e)=>{setcolor(e.target.style.backgroundColor)}}></div>
            <div style={{backgroundColor:'#F19576',height:'30px',width:'30px',borderRadius:'100%'}} onClick={(e)=>{setcolor(e.target.style.backgroundColor)}}></div>
            <div style={{backgroundColor:'#6691FF',height:'30px',width:'30px',borderRadius:'100%'}} onClick={(e)=>{setcolor(e.target.style.backgroundColor)}}></div>
            <div style={{backgroundColor:'#FF66F0',height:'30px',width:'30px',borderRadius:'100%'}} onClick={(e)=>{setcolor(e.target.style.backgroundColor)}}></div>
            </div></div>
          <button type="submit" style={{backgroundColor:'#001F8B',position:'relative',left:'80%',color:'#ffff',borderRadius:'10px',width:'20%',height:'15%',border:'none'}} onClick={()=>{
  setuser((prev)=>{
    return [...prev,{name:name,color:color||'#0047FF',id:prev.length+1,message:[]}]
  })
  console.log(user);
  localStorage.setItem('user',JSON.stringify(user))
  let data=localStorage.getItem('user')
  console.log(JSON.parse(data));
  setmodal(false)


          }}>Create</button> {/* Assuming a submit button */} 
    </div>
  );
};

export default Modal;
