import React from 'react'
import HOC from './comphonent8'

const Comphonent7 = ({count,onclickHandler}) => {
  return (
    <div>comphonent7
        <div>        <button onClick={onclickHandler}>increse click</button>
    <h3>{count}</h3>
    </div>

    </div>
  )
}

export default HOC(Comphonent7)