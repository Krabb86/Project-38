var monkey,monkeyImage;
var backg,backgroundImage;
var banana,bananaImage,bananaGroup,stone,stoneImage,obstacleGroup;
var ground,score;
var sky ;


function preload(){
  
  monkeyImage = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  backgroundImage = loadImage("jungle.jpg");
  
  bananaImage = loadImage ("banana.png");
  
  stoneImage = loadImage ("stone.png")
  
  
}





function setup() {
  createCanvas(displayWidth/2,displayHeight/2);
   
  
  backg = createSprite(displayWidth/4,displayHeight/4);
  backg.addImage("background1",backgroundImage);
  backg.scale = 0.8;
 
  
  ground = createSprite(200,395,400);
  ground.visible = false;
  
  monkey = createSprite(displayWidth/8 - 50,displayHeight/4 -10);
  monkey.addAnimation("player",monkeyImage);
  monkey.scale = 0.15;
  
bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
  
  score = 0;
  
}

function draw() {
   
 //console.log(monkey.y);
  
  
 
 if(score < 100){
  spawnObstacle();
  spawnBanana();
  backg.velocityX = -2;
 
 }
    
  
   if (keyDown( "space")&& monkey.y >=250) {
    monkey.velocityY = -20;
  }
  monkey.velocityY = monkey.velocityY + 0.8; 
    
  if (backg.x < 0){
      backg.x = backg.width/2;
    }
   if (monkey.isTouching(bananaGroup)) {
      bananaGroup.destroyEach();
      score = score + 2;
   
    }
  if(monkey.isTouching(obstacleGroup)){
   score = 0;
    obstacleGroup.destroyEach();
    monkey.scale = 0.15;
  }
  
  switch(score){
    case 10: monkey.scale=0.17;
            break;
    case 20 :monkey.scale=0.19;
            break;
    case 30: monkey.scale=0.21;
            break;
    case 40 :monkey.scale=0.23;
            break;
   default:break;
  } 
 
   stroke("white");
textSize(20);
fill("white");
text("Score:" + score, 310,20);
  monkey.collide(ground);
  drawSprites();
}
 

function spawnBanana() {
  if (frameCount % 80 === 0) {
     banana = createSprite(390,200);
    banana.y = sky;
    banana.addImage("banana",bananaImage);;
    banana.velocityX = -5;
    banana.lifetime = 80;
    bananaGroup.add(banana);
    banana.scale = 0.05;
    sky = displayHeight/4 - Math.round(random(20-500));
  }
  
}
function spawnObstacle() {
  if (frameCount % 300 === 0) {
   stone =createSprite(400,299) ;
   stone.addImage("obstacle",stoneImage);
    stone.velocityX = -6;
    stone.lifetime = 70;
    stone.scale = 0.25;
    obstacleGroup.add(stone);
  }
  
}
