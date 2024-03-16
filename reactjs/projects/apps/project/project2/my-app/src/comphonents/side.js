import React from 'react'

const Side = ({data, selectmovies,setselectmovies}) => {
    function onclickHandler(){
        console.log('fjksdf');
        setselectmovies((prev)=>prev.filter(item=>item!==data))
    }
  return (
    <div onClick={onclickHandler}>
    {data}
    </div>
  )
}

export default Side