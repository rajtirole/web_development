import React from 'react'

const Moviebox = ({data ,selectmovies,setselectmovies}) => {
    function handleclick(){

        console.log(selectmovies)
        if(selectmovies.includes(data.id)){
            setselectmovies((prev)=>prev.filter(item=>item!==data.id)
            )}
            else{
                setselectmovies((prev)=>[...prev,data.id])
            }
           
    }
  return (
    <>
    <div style={{backgroundColor:data.color, border:`${
        selectmovies.includes(data.id)?"4px solid green":"4px solid black"
    }`} }onClick={handleclick}>
        <p>{data.id}</p>
        {data.image}

    </div>
   
    </> 
  )
}

export default Moviebox