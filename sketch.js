var bgImg;
var gameState = "start"
var dora;
var dora_run;
var dora_jump;
var ground;


function preload(){
  bgImg = loadImage("background.png");
  startImg = loadImage("Loading screen.png")
  playImg = loadImage("play button.png")
  dora_run = loadAnimation("dora.png","dora1.png","dora2.png","dora3.png","dora4.png","dora5.png");
  //platform = loadImage("platform.png");
  dora_jump = loadImage("dora jump.png");

}

function setup() {
  createCanvas(1200,550);
  bg = createSprite(600,300,2000,10);
  bg.visible = true;
  play = createSprite(260,450);
  play.visible = true;
  ground = createSprite(200,525,10000,20);
 ground.static = true;
  ground.visible  = false;
  dora = createSprite(100,470,20,50);
  dora.addAnimation("run",dora_run);
  dora.visible = false;
  dora.scale = 0.4;
 

}

function draw() {
  background('lightblue');  

if (gameState === "start"){
 bg.addImage (startImg);
 bg.scale = 1;
 play.addImage(playImg);
 play.scale = 0.7;
 
 
 
 if(mousePressedOver(play)){
gameState = "play";
}
}


if (gameState === "play"){
  
 

  bg.addImage(bgImg);
  bg.scale = 0.7;
  play.visible = false;
 
  
  dora.visible = true;
  
  
ground.visible = false;
}
if(keyIsDown(RIGHT_ARROW)){
bg.velocityX = -5;

}

if(keyIsDown(LEFT_ARROW) ){
  bg.velocityX = 0 ;
    
  }
  if(keyDown(UP_ARROW)&& dora.y >= 460 ){
    dora.velocityY = -20;
    dora.addImage(dora_jump);  
    }

    dora.velocityY = dora.velocityY  +1.6;
   // if(keyIsDown(DOWN_ARROW)){
     // dora.velocityY = dora.velocityY  + 2;
     if (bg.x < 0){
      bg.x = bg.width/2;
    }
     // }
    
     dora.collide(ground);

 drawSprites();
}