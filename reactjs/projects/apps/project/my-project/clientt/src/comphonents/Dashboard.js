import React from 'react'
import DashboardImpresion from './DashboardImpresion'
import DashboardTrending from './DashboardTrending'
import './Dashboard.css'

const Dashboard = () => {
  return (
   <>
   <div className='Dashboard'>
   <DashboardImpresion></DashboardImpresion>
  
   <DashboardTrending></DashboardTrending></div>
   
   </>
  )
}

export default Dashboard