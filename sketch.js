var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obstacleTop1 = loadImage("assets/obsTop1.png"); 
obstacleTop2 = loadImage("assets/obsTop2.png"); 
obstacleBottom1 = loadImage("assets/obsBottom1.png"); 
obstacleBottom2 = loadImage("assets/obsBottom2.png"); 
obstacleBottom3 = loadImage("assets/obsBottom3.png");

}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;

        Bar()
        drawSprites();
        spawnObstaclesTop();
        
}
function spawnObstaclesTop(){
  if(World.frameCount % 60 === 0){
    obstacleTop = createSprite(400, 50, 40, 50);
    obstacleTop.scale = 0.1; 
    obstacleTop.velocityX = -4; 
    obstacleTop.y = Math.round(random(10,100));
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1 : obstacleTop.addImage(obstacleTop1)
      break; 
      case 2 : obstacleTop.addImage(obstacleTop2)
      break; 
      default :
      break;
    }
    obstacleTop.lifetime = 100
    balloon.depth = balloon.depth + 1
  }

}
function Bar(){
  if(World.frameCount % 60 === 0){
    var bar  = createSprite(400, 200, 10, 800);
    bar.velocityX = -6;
    bar.depth = balloon.depth; 
    bar.lifetime = 70; 
    bar.visible = false ; 
  }
}