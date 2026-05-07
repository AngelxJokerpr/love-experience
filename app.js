
/* LOGIN */
function start(){
  const p=document.getElementById("pass").value;

  if(p==="071605"){
    document.getElementById("music").play();
    next("intro");
  }else{
    alert("❌ Error");
  }
}

/* NAV */
function next(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* PUZZLE */
const board=document.getElementById("board");

let pieces=[0,1,2,3,4,5,6,7,null];

function render(){
  board.innerHTML="";

  pieces.forEach((p,i)=>{

    const div=document.createElement("div");

    if(p===null){
      div.classList.add("piece","empty");
    }else{
      div.classList.add("piece");

      const r=Math.floor(p/3);
      const c=p%3;

      div.style.backgroundPosition=`${-c*100}px ${-r*100}px`;

      div.onclick=()=>move(i);
    }

    board.appendChild(div);
  });

  check();
}

function move(i){
  const e=pieces.indexOf(null);
  const valid=[e-1,e+1,e-3,e+3];

  if(valid.includes(i)){
    [pieces[i],pieces[e]]=[pieces[e],pieces[i]];
    render();
  }
}

function shuffle(){
  for(let i=0;i<100;i++){
    const e=pieces.indexOf(null);
    const moves=[e-1,e+1,e-3,e+3].filter(x=>x>=0&&x<9);
    const r=moves[Math.floor(Math.random()*moves.length)];
    [pieces[r],pieces[e]]=[pieces[e],pieces[r]];
  }

  render();
}

function check(){
  if(JSON.stringify(pieces)===
     JSON.stringify([0,1,2,3,4,5,6,7,null])){
    document.getElementById("win").style.display="block";
  }
}

render();
shuffle();