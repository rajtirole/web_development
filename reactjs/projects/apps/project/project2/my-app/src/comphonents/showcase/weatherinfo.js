import React, { useEffect, useState } from 'react'

const Weatherinfo = () => {
    const [data,setdata]=useState({})
    let country='Amsterdam'
    var opts = {
        headers: {
          'mode':'no-cors'
        }
      }
      
    useEffect(()=>{
        fetch('https://www.timeapi.io/api/Conversion/DayOfTheYear/2021-03-14', {mode:'no-cors'}).then((res)=>{
        setdata(res)

    })

    },[])
    console.log(data);
  return (
    <div>Time </div>
  )
}

export default Weatherinfo