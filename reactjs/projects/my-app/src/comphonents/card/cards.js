import { useState } from 'react';
import Card from './card';
// import css from './card.css';
function Cards(){
    // console.log('kjlajfd');
    // let [num,setnum]=useState(0)
    // const a=()=>{
    //    setnum(num=num+1)
    //     console.log(num);
    // }
    return (<>
    <div className='bg-slate-200  justify-center w-[90vw] md:w-[50vw]  '>
   <div className='grid grid-rows-[1fr,1fr,1fr] grid-cols-[1fr,1fr,1fr]'> 
   {/* <button onClick={a}>increse</button>
   <div>{num}</div> */}
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card></div>
   </div>
    </>)
}
export default Cards;