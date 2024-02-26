import React from 'react'
import './dashboard.css'
import DashboardSideComphonent from '../comphonents/DashboardSideComphonent'
import DashboardComphonent from '../comphonents/DashboardComponent'
const Dashboard = () => {
  return (
    <>
    <div className='DashboardContainers'>
    <DashboardSideComphonent></DashboardSideComphonent>
    <DashboardComphonent></DashboardComphonent>
    </div>
    
    
    </>
  )
}

export  default Dashboard