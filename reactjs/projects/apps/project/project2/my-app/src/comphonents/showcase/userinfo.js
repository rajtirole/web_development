import React from 'react'

const Userinfo = ({userData,selectmovies}) => {
    
  return (
    <>   <div>
    <p>{userData.name}</p>
    <p>{userData.email}</p>

   </div>
   <div>
    {selectmovies.map((data)=>{
        return <div>{data}</div>
    })}
   </div>
   </>

  )
}

export default Userinfo