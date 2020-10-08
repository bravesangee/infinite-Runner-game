var PLAY = 1;
var END = 0;
var gameState = PLAY;

var runner;
var ground;
var obtacle; 
var energy;
var score=0;
var Death=0;
var backgroundImg

function preload(){
runnerAnimation=loadAnimation("pikachu 1.png","pikachu 2.png","pikachu 3.png","pikachu 4.png")
  
obstacleImg=loadImage("torterra.jpg");  
energyImg=loadImage("energy.png")  
energy2=loadImage("energy2.jpg")  
    
jumpSound = loadSound("pikachu.mp3")
attackSound=loadSound("Pikachu-Attack.mp3")
 backgroundSound = loadSound("Pokemon-Game-Remix-Ringtone.mp3")
gameOverImg=loadImage("gameOver.jpg")  
background1=loadImage("th (1).jpg"); 
background2=loadImage("th.jpg");
background3=loadImage("Winter_House_and_Snow_Ground_PNG_Clipart_Image.png")  
}

function setup() {
  createCanvas(400,400)
  
  if(frameCount%20000===0) {
    backgroundImg2=createSprite(200,200,20,20)
     backgroundImg2.addImage("rrs",background3)
    backgroundImg2.velocityX = -3;
     backgroundImg2.scale=2.4
   }
  
  if(frameCount%10000===0) {
    backgroundImg2=createSprite(200,200,20,20)
     backgroundImg2.addImage("rr",background2)
    backgroundImg2.velocityX = -3;
     backgroundImg2.scale=2.4
     backgroundImg2.lifetime=2000
   backgroundSound.play(true);  
   }
  
    backgroundImg=createSprite(200,200,20,20)
    backgroundImg.addImage("ss",background1);
    backgroundImg.velocityX = -3;
    backgroundImg.scale=3
    backgroundImg.lifetime=10000 ;
  
 runner=createSprite(20,360,20,20);
 runner.addAnimation("pika",runnerAnimation)
 runner.scale=1.5 
  
  ground=createSprite(200,390,700,10);
  ground.x = ground.width /2;
  ground.velocityX = -10
  score=0
  
  
  obstacleGroup = new Group();
}

function draw() {
  background("white")
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if (backgroundImg.x < 0){
      backgroundImg.x =backgroundImg.width/2;
    }
  
  runner.collide(ground);
  console.log(runner.y);   
  runner.velocityY = runner.velocityY + 0.35;          

  if (backgroundImg2.x < 0){
      backgroundImg2.x =backgroundImg2.width/2;
      
    }
  
  if(keyDown("space") && runner.y >= 159) {
    runner.velocityY = -8;
    
    }
  

     ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/30);
  
  if(keyWentUp("space")){
    runner.addAnimation("runnerAnimation");

    jumpSound.play() 
  }
  
  spawnSound();

  spawnObstacle(); 
 drawSprites();
 energygroup=new Group(); 
 obstacleGroup=new Group(); 
   fill("black"); 
    text("Score: "+ score, 290,50);
}
function spawnObstacle(){
if(frameCount%120===0){
   var obstacle = createSprite(300,400,10,40);
    obstacle.y = Math.round(random(360,360));
    obstacle.velocityX = -3;
    obstacle.addImage("image",obstacleImg)
    obstacle.scale=0.4;
     //assign lifetime to the variable
    obstacle.lifetime = 200;}}


function spawnSound(){
if(frameCount%550===0){
    sound=createSprite(200,200,20,20);
    sound.visible=false;
    sound.y = Math.round(random(310,310));
    sound.velocityX = -3;
   backgroundSound.play(false)}}