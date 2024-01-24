import  React ,{ useState } from "react";

function HOC(Comphonent){
    function ModifiedComphonent(){
        let [count,setcount]=useState(0)
        function onclickHandler(){
            setcount(++count)
        }

        return <Comphonent count={count} onclickHandler={onclickHandler} ></Comphonent>
    }
return ModifiedComphonent;  
}
export default HOC;