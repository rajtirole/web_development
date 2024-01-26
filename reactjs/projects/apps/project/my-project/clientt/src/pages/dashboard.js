import React from 'react'
import DashboardSideComphonent from '../comphonents/DashboardSideComphonent'
import DashboardComphonent from '../comphonents/DashboardComponent'
const Dashboard = () => {
  return (
    <>
    <div className='DashboardContainers h-screen flex w-full'>
    <DashboardSideComphonent></DashboardSideComphonent>
    <DashboardComphonent></DashboardComphonent>
    </div>
    
    
    </>
  )
}

export  default Dashboard