import React, { useState } from 'react';
import HOC from './comphonent8';


const Comphonent6 = ({count,onclickHandler}) => {

  return (
    <div>comphonent6  
        <div>
        <button onMouseEnter={onclickHandler}>increse hover</button>
    <h3>{count}</h3>
    </div>


    </div>
  )
}

export default HOC(Comphonent6)