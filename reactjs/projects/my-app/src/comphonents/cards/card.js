import { useState } from "react";
// import YoutubeMp3Downloader from 'youtube-mp3-downloader'
// export default function Card() {
//   console.log(YoutubeMp3Downloader);
//   var YD = new YoutubeMp3Downloader({
//     "ffmpegPath": "/path/to/ffmpeg",        // FFmpeg binary location
//     "outputPath": "/path/to/mp3/folder",    // Output file location (default: the home directory)
//     "youtubeVideoQuality": "highestaudio",  // Desired video quality (default: highestaudio)
//     "queueParallelism": 2,                  // Download parallelism (default: 1)
//     "progressTimeout": 2000,                // Interval in ms for the progress reports (default: 1000)
//     "allowWebm": false                      // Enable download from WebM sources (default: false)
// });
//   return (
//     <div>




//     </div>

//   )
// }
export default function Card() {
    const [number,setnumber]=useState('0')
    const [numberr,setnumberr]=useState('0')
    console.log('fjalsdkjfljsdf');
    // console.log(typeof(number));
    

   
    
    







    function aa(num){
  
      console.log(number.length);
      if(number==0){
        setnumber(num)
      }
      else if((number[number.length-1]=='+'||number[number.length-1]=='-'||number[number.length-1]=='*'||number[number.length-1]=='/') &&(num=='+'||num=='-'||num=='*'||num=='/')){
        // setnumber(number.slice(0,number.length-2)+num)
        let aa=number.slice(0,number.length-1);
        setnumber(aa+num)
        console.log(aa+num);
        console.log(num);
        console.log(number.slice(0,number.length-1));
  
      }
      else{
        setnumber(number+num)
      }
      
      // console.log(typeof(num));
  
    }
    return (
     <>
       
  {/* <div className="box">
    
     <Cards></Cards>
     <div className="grid grid-cols-4 gap-4 to-white text-3xl font-bold underline place-content-center">
    <div>01</div>
    <div>01</div>
    <div>01</div>
    <div>01</div>
    <div>01</div>
    <div>01</div>
    <div>01</div>
    <div>01</div>
    <div>01</div>
   
    <div>09</div>
  </div>
    <h3 className='flex place-content-center h-screen bg-red-600 text-6xl'>lorenjflakjfklaj</h3>
     </div> */}
     {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/wlhhT66RDxc?si=efl0EBaTY_CpGXGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
     <div className="box2 bg-gray-300 h-screen  flex items-center justify-center ">
     {/* calculator app  */}
     <div className="grid grid-rows-6 grid-cols-4 gap-2 bg-slate-800 text-white border-solid border-2 border-gray-500 rounded w-[90%] h-[60%] md:h-3/5 md:w-2/4  grid-rows-[minmax(10px,120px)] md:grid-rows-[minmax(10px,20%)] p-5">
      <div className='hover:border-gray-200  output-screen col-span-4 bg-slate-900 border-solid border-2 border-gray-600 rounded '>
        <div className="text-2xl text-right ">{number}</div>
        <div className="text-2xl text-right  next">{numberr}</div>
      </div>
      <button onClick={(e)=>{setnumber('0');setnumberr('0');}} className='hover:border-gray-400  text-2xl col-span-2 border-solid border-2 border-gray-600 rounded  bg-slate-950'>AC</button>
      <button onClick={(e)=>{
        let a=number.slice(0,number.length-1)
        console.log(a.length);
        if(a.length<1){
          setnumber('0');
        }
        else{
          setnumber(a)
        }
  
      console.log(a); 
      }} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>DEL</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>/</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>1</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>2</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>3</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>*</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>4</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>5</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>6</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>+</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>7</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>8</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>9</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>-</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>.</button>
      <button onClick={(e)=>{aa(e.target.textContent)}} className='hover:border-gray-400 text-2xl border-solid border-2 border-gray-600 rounded  bg-slate-950'>0</button>
      <button onClick={(e)=>{setnumberr(eval(number))}} className=' text-2xl col-span-2 hover:border-gray-400  border-solid border-2 border-gray-600 rounded  bg-slate-950'>=</button>
     </div> 
     </div>
     </>
    );
  }
 