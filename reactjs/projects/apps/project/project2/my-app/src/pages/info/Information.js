import React from 'react'
import action from '../../assets/fasd.jpg'
import drama from '../../assets/th.jpg'
import music from '../../assets/jajks.jpg'
import Moviebox from '../../comphonents/Moviebox'
import { useState,useEffect } from 'react'
import Side from '../../comphonents/side'
import {useNavigate} from 'react-router-dom'

const Information = () => {
    const [selectmovies,setselectmovies] =useState([])
    const navigate=useNavigate();
    
    const genere=[
        {
            id:'Action',
            color:'#FF5209',
            image:<img style={{width:'160px', height:'120px' }} src={action}></img>
        },
        {
            id:'Drama',
            color:'#D7A4DE',
            image:<img style={{width:'160px', height:'120px' }} src={drama}></img>
        },
        {
            id:'Music',
            color:'#E61E32',
            image:<img style={{width:'160px', height:'120px' }} src={music}></img>
        }
    ]
  return (
    <>
    <div>
        {genere.map((data)=>{
            return <Moviebox data={data} key={data.id} selectmovies={selectmovies} setselectmovies={setselectmovies}></Moviebox>
        })}
        {selectmovies.map((data)=>{
        return <Side data={data}  key={data.id} selectmovies={selectmovies} setselectmovies={setselectmovies}></Side>
    })}
    </div>
    {selectmovies.length<3&&(<p>minimum 3 category required selected</p>)}
    <button onClick={()=>{
        window.localStorage.setItem('selectmovies',JSON.stringify(selectmovies))
        navigate('/show')
    }}>submit</button>
    </>
  )
}

export default Information