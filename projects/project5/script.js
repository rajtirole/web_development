let num2 = 0;
// let rule =document.querySelector('.box2-1')
let rule = document.querySelector(".box2-1");
let board = document.querySelector(".board");
let board2 = document.querySelector(".board-box1");

//for game
let r = document.querySelector(".box3-1");
let s = document.querySelector(".box3-2");
let p = document.querySelector(".box3-3");

let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

let box41_1_shadow = document.querySelector(".box41_1_shadow");
let box41_1 = document.querySelector(".box41-1");
let box4_1 = document.querySelector(".box4-1");
let box4_2 = document.querySelector(".box4-2");
let box4_3 = document.querySelector(".box4-3");

let score1 = document.querySelector(".score12");
let score2 = document.querySelector(".score21");

let page = document.querySelector("body");



function playagainn(){
  console.log('play');
  localStorage.setItem("score2_1",0);
  localStorage.setItem("score1_1", 0);
  score2.textContent = localStorage.getItem("score2_1");
  score1.textContent = localStorage.getItem("score1_1");
  box3.classList.remove("box8");
  box4.classList.add("box8");
  
}
// console.log(page);
let score1_1 = Number(localStorage.getItem("score1_1") || 0);
let score2_1 = Number(localStorage.getItem("score2_1") || 0);
page.onload = function load() {
  if (score1_1 || score2_1) {
    score2.textContent = score2_1;
    score1.textContent = score1_1;
  }

  console.log("page loaded");
};

// let score2_1=0;
console.log(score1_1);
console.log(score2_1);

r.addEventListener("click", () => {
  // console.log('rock');
  rr("r");
});
s.addEventListener("click", () => {
  // console.log('s');
  rr("s");
});
p.addEventListener("click", () => {
  // console.log('p');
  rr("p");
});
function rr(a) {
  // console.log(a);
  box3.classList.add("box8");

  box4.classList.remove("box8");
  if (a == "r") {
    box4_1.innerHTML = `<p>YOU PICKED</p><div class="box41-5">
        <img src="./assets/icons8-fist-67 1.png" alt="" />
      </div>`;
  } else if (a == "s") {
    // box41_1.innerHTML='<img src="./assets/17911 1.png" alt="" />'
    // let box43_1 = document.querySelector('.box43-1');
    // console.log(box43_1);
    // box43_1.classList.add('box43-7')
    // box43_1.classList.add('box43-1')
    box4_1.innerHTML = `<p>YOU PICKED</p><div class="box43-1 box43-7">
        <img src="./assets/17911 1.png" alt="" />
      </div>`;
  } else {
    box4_1.innerHTML = `<p>YOU PICKED</p><div class="box43-1">
        <img src="./assets/icons8-hand-64 1.png" alt="" />
      </div>`;
  }
  // async function fs(){
  //     await setInterval(() => {
  //         console.log('d');
  //     },1000)
  // }
  // fs();
  let num = Math.floor(Math.random() * 3);
  if (num == 0) {
    console.log("r", num);
    box4_3.innerHTML = `<p>PC PICKED</p><div class="box41-5">
        <img src="./assets/icons8-fist-67 1.png" alt="" />
      </div>`;
  }
  if (num == 1) {
    console.log("p", num);
    box4_3.innerHTML = `<p>PC PICKED</p><div class="box43-1">
        <img src="./assets/icons8-hand-64 1.png" alt="" />
      </div>`;
  }
  if (num == 2) {
    console.log("s", num);
    box4_3.innerHTML = `<p>PC PICKED</p><div class="box41-8">
        <img src="./assets/17911 1.png" alt="" />
      </div>`;
  }

  // console.log('kfadjfkj');

  if (
    (num == 0 && a == "r") ||
    (num == 1 && a == "p") ||
    (num == 2 && a == "s")
  ) {
    box4_2.innerHTML = `<h1>TIE UP</h1><button class="playagain">REPLAY</button>`;
  } else if (
    (num == 0 && a == "s") ||
    (num == 2 && a == "p") ||
    (num == 1 && a == "r")
  ) {
    localStorage.setItem('score1_1', score1_1 + 1);
    score2.textContent = localStorage.getItem('score1_1');

    localStorage.setItem("score1_1", score1_1 + 1);
    console.log(localStorage.getItem("score1_1"));
    score1.textContent = localStorage.getItem("score1_1");
    // score2.textContent=1;
    box4_2.innerHTML = `<h1>YOU <span>LOST</span></h1>
    <p>AGAINST PC</p>
    <button class='playagain'>PLAY AGAIN</button>`;





    // let box43_1=document.querySelector('.box43-1')

    //     box43_1.classList.add('box41_1_shadow')
  } else {
    localStorage.setItem("score2_1", score2_1 + 1);
    console.log(localStorage.getItem("score2_1"));
    score2.textContent = localStorage.getItem("score2_1");
    let box43_1 = document.querySelector(".box43-1");
    let box41_5 = document.querySelector(".box41-5");
    if (a == "r") {
      box41_5.classList.add("box41_1_shadow");
    } else if (a == "s" || a == "p") {
      box43_1.classList.add("box41_1_shadow");
    }

    // if(a=='s'){

    // let box41_1=document.querySelector('.box41-1')
    //     // box41_1.classList.add('box41_1_shadow')

    // }
    // let box41_5=document.querySelector('.box41-5')

    // console.log(box41_5);
    // console.log('pc los');
    // box41_5.classList.add('box41_1_shadow')
  }
  //    if(num==1&&a=='s'){
  //     box4_2.innerHTML=`<h1>YOU <span>LOST</span></h1>
  //     <p>AGAINST PC</p>
  //     <button>PLAY AGAIN</button>`

  //    }
  //    if(num==0&&a=='s' || num==0&&a=='p'){
  //     box4_2.innerHTML=`<h1>YOU <span>LOST</span></h1>
  //     <p>AGAINST PC</p>
  //     <button>PLAY AGAIN</button>`

  //    }

  // score();
  // if(num=='0')
  // console.log(a);
  // console.log('afjhdkj');
}
function score() {}

//board
let a = false;
rule.addEventListener("click", board1);
board2.addEventListener("click", board1);
function board1() {
  // console.log("faksld",a);
  a = !a;
  if (a) {
    board.classList.add("board1");
    board.classList.remove("board");
  } else {
    board.classList.remove("board1");
    board.classList.add("board");
  }
}


// let playagain1 = document.querySelector(".playagain1");
// let playagain2 = document.querySelector(".playagain2");




// playagain1.addEventListener("click",()=>{
//   console.log('playagain1');
// })
// playagain2.addEventListener("click",()=>{
//   console.log('playagain2');
// })

let playagain = document.querySelector(".playagain");
playagain.addEventListener("click",playagainn)
// console.log('fasdjfkj');
