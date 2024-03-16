import React from 'react'
import Userinfo from '../../comphonents/showcase/userinfo'
import Weatherinfo from '../../comphonents/showcase/weatherinfo'

const Showcase = () => {
  const userData=JSON.parse(window.localStorage.getItem('userinfo'))
  const selectmovies=JSON.parse(window.localStorage.getItem('selectmovies'))
  console.log(selectmovies);
  return (<>
    <div>Showcase</div>
    <Userinfo userData={userData} selectmovies={selectmovies}></Userinfo>
    <Weatherinfo></Weatherinfo>
    </>
  )
}

export default Showcase