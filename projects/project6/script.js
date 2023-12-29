// let box2_1=document.querySelector('.box2-1')
let box1 = document.querySelector(".box1");
console.log(box1);
[...document.querySelectorAll(".box2-1")].forEach(function (item) {
  item.addEventListener("click", () => {
    playagain(item.textContent);
  });
});
function playagain(a) {
    let aa=false;
    try{
        
 
    // console.log(box1.innerHTML);
    // console.log(box1.textContent);
    if (a == "RESET") {
        box1.textContent = 0;
    }
    else if (a == "DEL") {
            let aa = box1.textContent;
            if(aa.length==1){
                console.log(aa.length);
            box1.textContent = 0;
        }
        else if (aa != null && aa.length > 1) {
        aa = aa.substring(0, aa.length - 1);
        console.log(aa);
        box1.textContent = aa;
        }

        // console.log(typeof(a));
    }
    
    else if(a=='='){
        let aaa='';
        let aa=[...box1.textContent];
        console.log(aa);
        for(let i=0; i<aa.length; i++){
            if(aa[i]=='X'){
            
            aa[i] ='*'
           
        }
       
       }
       
       aa.forEach((value)=>{
        aaa=aaa+value;
        return aaa;
       })
       console.log(aaa);
  
  let a=eval(aaa);
  console.log(a);
  box1.textContent=a;

    }
    else {
    // let bb='';
    if(box1.textContent==0){
        box1.textContent=a;
    }
    else{
    b = box1.textContent + a;
    // console.log(b);
    box1.innerHTML = b;
    }
    }
    let aaaa=box1.textContent;
    // console.log(aaaa);
    // console.log(aaaa[aaaa.length-1]);
    // console.log(aaaa[aaaa.length-2]);
    if(a=='+'||a=='-'||a=='/'||a=='*'||a=='X'||a=='.'){
    if((aaaa[aaaa.length-1]==a&&aaaa[aaaa.length-2]==a)||(aaaa[aaaa.length-1]==a&&aaaa[aaaa.length-2]=='-')||(aaaa[aaaa.length-1]==a&&aaaa[aaaa.length-2]=='+')||(aaaa[aaaa.length-1]==a&&aaaa[aaaa.length-2]=='/')||(aaaa[aaaa.length-1]==a&&aaaa[aaaa.length-2]=='X')||(aaaa[aaaa.length-1]==a&&aaaa[aaaa.length-2]=='.')){
        console.log(aaaa[aaaa.length-1]);
        console.log(aaaa[aaaa.length-2]);
        aaaa=aaaa.substring(0,aaaa.length-2);
       box1.textContent=aaaa+a;
        
    }
    // console.log(aaaa+a);
}

    }
    catch(e){
        console.log(e);
        aa=true;
    }
    if(aa){
        box1.textContent==0
        console.log('akljdflj');
        
    }
}
