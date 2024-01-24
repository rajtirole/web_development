import React, { useRef } from 'react'
import Play from'./Playerr'
function Cards() {
    let aa=useRef(null)
    console.log(aa.current);
  return (<><Play></Play>
  <div>
    <input type="text" placeholder='jfladjf' ref={aa}></input>
  </div>
  
  </>
    
  )
}

export default Cards