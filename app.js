

// LOGIN
function start(){
  let p=document.getElementById("pass").value;

  if(p==="071605"){
    document.getElementById("music").play();
    next("level1");
    game1();
    hearts();
  }else{
    alert("❌ código incorrecto");
  }
}

// CAMBIO NIVEL
function next(id){
  document.querySelectorAll(".screen").forEach(s=>{
    s.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  if(id==="level1") game1();
  if(id==="level2") game2();
  if(id==="level3") game3();
  if(id==="letter") showLetter();
}

/* =========================
   🎮 MOTOR MARIO AAA
========================= */

function create(canvasId,color){

  let c=document.getElementById(canvasId);
  let ctx=c.getContext("2d");

  let p={x:50,y:150,vy:0,j:false};
  let g=0.8;

  document.onkeydown=(e)=>{
    if(e.key==="ArrowRight") p.x+=10;
    if(e.key==="ArrowLeft") p.x-=10;
    if(e.key===" " && !p.j){
      p.vy=-12;
      p.j=true;
    }
  };

  function loop(){
    ctx.clearRect(0,0,400,200);

    // suelo
    ctx.fillStyle="rgba(0,0,0,0.3)";
    ctx.fillRect(0,170,400,30);

    // jugador
    ctx.fillStyle=color;
    ctx.fillRect(p.x,p.y,20,20);

    p.y+=p.vy;
    p.vy+=g;

    if(p.y>=150){
      p.y=150;
      p.j=false;
    }

    requestAnimationFrame(loop);
  }

  loop();
}

function game1(){ create("game1","blue"); }
function game2(){ create("game2","green"); }
function game3(){ create("game3","purple"); }

/* =========================
   💌 CARTA AAA
========================= */

function showLetter(){
  let text=`
  7 meses contigo...

  No es solo tiempo,
  es vida contigo.

  Cada viaje, cada mirada,
  cada risa contigo
  es mi lugar favorito.

  Te elegiría siempre ❤️
  `;

  let i=0;
  let el=document.getElementById("text");
  el.innerHTML="";

  function write(){
    if(i<text.length){
      el.innerHTML+=text[i];
      i++;
      setTimeout(write,30);
    }
  }

  write();
}

/* =========================
   💖 PARTÍCULAS CORAZÓN
========================= */

function hearts(){
  setInterval(()=>{
    let h=document.createElement("div");
    h.innerHTML="❤️";
    h.style.position="fixed";
    h.style.left=Math.random()*100+"vw";
    h.style.top="100vh";
    h.style.fontSize="20px";
    h.style.animation="fall 4s linear";

    document.body.appendChild(h);

    setTimeout(()=>h.remove(),4000);
  },300);
}