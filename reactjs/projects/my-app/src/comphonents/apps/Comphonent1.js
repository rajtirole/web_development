import React, { useState } from 'react'

function Comphonent1() {
    const [username1,setusername1]=useState({
      username: 'JoeSchmoe200',
      points: 200,
      isHoveringOverItem: {item1: false, item2: false, item3: false},
      selectedItem: {item1: true, item2: false, item3: false}
  })
  // setusername1.username('kfjasld')



  // setusername1(prev=>({...prev, 'fasdf':'fasdfasdfagah'}))
  console.log(setusername1,username1);
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    function submitHandler(e){
      e.preventDefault()
        console.log('form submitHandler');
        console.log(e.target);
        setusername1((prevState) => ({...prevState,nname: 'value',points:300,selectedItem:{...prevState.selectedItem,item5:'item5'}}))
  console.log(username1);

    }
    function changeHandler(e){
        console.log(e.target.id);
        if(e.target.id=='username') setusername(e.target.value);
        else if(e.target.id=='email') setemail(e.target.value);
        else if(e.target.id=='password') setpassword(e.target.value);
        // console.log(e.target.value);
        // set
        // console.log(e);
    }
  return (
    <div className='flex h-screen flex-col justify-evenly items-center'>
        <h1>FORM</h1>
    <form className='flex border-gray-500 flex-col justify-center items-center  text-black text-xl'>
     <input type="text" placeholder='enter username' id='username' onChange={changeHandler} />
     <input type="email" placeholder='enter email' id='email' onChange={changeHandler}/>
     <input type="password" placeholder='enter password' id='password' onChange={changeHandler}/>
     <button type='submit' onClick={submitHandler}>Submit</button>
    </form>
    <div className='flex flex-col text-black text-xl '>
    <p>user name is -{username}</p>
    <p>password is -{password}</p>
    <p>email is -{email}</p>
    </div>
    </div>
  )
}

export default Comphonent1