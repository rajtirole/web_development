import React from 'react'
import './DashboardSideComphonent.css'
import axios from 'axios';
function logoutHandler(){
    try {
        let res=axios.get("http://localhost:5400/api/v1/user/logout")
        console.log(res);
        console.log('logout succesful');

    } catch (error) {
        console.log(error);
        
    }
}
const DashboardSideComphonent = () => {
  return (
    <div className='DashboardSideContainer' >
        <div>QUIZZIE</div>
        <div className='SideBarContainer'>
            <div>Dashboard</div>
            <div>Analytics</div>
            <div>Create Quiz</div>

        </div>
       
        <div onClick={logoutHandler}>LOGOUT</div>
    </div>
  )
}

export default DashboardSideComphonent