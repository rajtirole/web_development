import React from 'react'

const DashboardSideComphonent = () => {
  return (
    <div className='containerDashboard h-screen flex flex-col w-1/4 justify-between' >
        <div>QUIZZIE</div>
        <div className='menu'>
            <div>Dashboard</div>
            <div>Analytics</div>
            <div>Create Quiz</div>

        </div>
        <div>LOGOUT</div>
    </div>
  )
}

export default DashboardSideComphonent