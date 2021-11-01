var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width=800;
canvas.height=800;
document.body.appendChild(canvas);


function start(secim){

    var secim = secim.id

    if(secim==="hard"){
        setInterval(loop,30);
    }
     if(secim==="normal"){
        setInterval(loop,60);
    } 
    if(secim==="easy") {
        setInterval(loop,100);
    }

    document.getElementById("easy").remove();

    document.getElementById("normal").remove();

    document.getElementById("hard").remove();

    document.getElementById("sec").remove();

}



document.addEventListener("keyup",key);

var posY=0;
var posX=0;
var vx=0;
var vy=0;
var snakes=[];
var appleX=20;
var appleY=20;
var score=4;

 function loop(){
     
     draw();

     update();

 }


function draw(){

    context.fillStyle="black";
    context.fillRect(0,0,800,800);
    context.fillStyle="red"
    context.fillRect(appleX * 20, appleY * 20,20,20  ) 
    context.fillStyle="green"
    snakes.forEach(t=>{
        context.fillRect(t.posX * 20, t.posY*20,20,20)
    })
    
    context.fillStyle="white"
    context.font= "30px Arial"
    context.fillText(score -4,20,40);

}

function update(){
    posX +=vx;
    posY +=vy;
    snakes.push({posX: this.posX, posY:this.posY})
    snakes.forEach(t=>{
        if(snakes.length > score){
            snakes.shift();
        }
    })

    if(posX === appleX && posY===appleY){

        score++;
        appleX=Math.floor(Math.random()*40);
        appleY=Math.floor(Math.random()*40);

    }

         
    if( posX>40 || posX<0 || posY>40 || posY<0  ){        
        location.assign("yandin.html");
    }


}

function key(e){
    if(e.keyCode===87 && vy!=1 ){
        vx=0;
        vy=-1;
    }
    if(e.keyCode===83 && vy!=-1 ){

        vx=0;
        vy=1;
    }

    if(e.keyCode===68 && vx!=-1 ){

        vx=1;
        vy=0;
    }

    if(e.keyCode===65 && vx!=1 ){

        vx=-1;
        vy=0;
    }



}

