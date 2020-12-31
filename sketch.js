//const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

var obstacle,obstacleIMG,obstacleGroup;

var engine, world;
var back1;
var form,play;
var green, greenGroup, blue, blueGroup, orange, orangeGroup, red, redGroup, violet, violetGroup, white, whiteGroup, yellow,yellowGroup;
var ground,grIMG;
var rod,rodIMG;
var slingShot;
var cannon,cannonImg,rodGroup;
var gameState = "play";

var rand =1;
var score = 0;

function preload(){

  back1 = loadImage("images/back.jpeg");
 // green = loadImage("images/greenBall.png");
  grIMG = loadImage("images/soil.png");
  rodIMG = loadImage("images/player.png");

  green = loadImage("images/green.png");
  blue = loadImage("images/blue.png");
  orange = loadImage("images/orange.png");
  red = loadImage("images/red.png");
  violet = loadImage("images/violet.png");
  white = loadImage("images/white.png");
  yellow = loadImage("images/yellow.png");

  cannonImg = loadImage("images/cannon.png");

}

function setup() {
  // engine  = Engine.create();
  // world = engine.world;

  createCanvas(displayWidth - 20, displayHeight-170);

  
  
  ground = createSprite(760,200,100,10);
  ground.scale = 3.1;
  ground.addImage(grIMG);
  
  cannon = createSprite(500,550,10,10);
  cannon.addImage(cannonImg);
  cannon.scale = 0.5;

  //rod = Bodies.circle(100,100,20);
 // World.add(world,rod);
 // slingShot = new Thread(this.rod,{x:500,y:400});

  greenGroup = new Group();
  blueGroup = new Group();
  orangeGroup = new Group();
  redGroup = new Group();
  violetGroup = new Group();
  whiteGroup = new Group();
  yellowGroup = new Group();
  rodGroup = new Group();



}

function draw() {

  background(back1);  
  
  // Engine.update(engine);
  

  cannon.x = mouseX;
  
    if(keyWentDown("space")&&gameState === "play") {
    var rod = createRod();
    rod.addImage(rodIMG);
    rod.y = cannon.y-200;
    rod.x = cannon.x+20;
    rod.depth = cannon.depth;
    cannon.depth = cannon.depth + 1; 
    
    }
  
if(gameState === "end"){
  cannon.x = displayWidth/2;
}
fill("white");
stroke("white");
//strokeWeight(10);
textSize(20);
text("SCORE :"+score,50,200);
  //fill("gold");
  //imageMode(CENTER)
 // image(rodIMG ,rod.position.x,rod.position.y,200,200);
  //slingShot.display();

  ground.display();
   cannon.display();
 

  greenGroup.setLifetimeEach(200);
  blueGroup.setLifetimeEach(200);
  orangeGroup.setLifetimeEach(200);
  redGroup.setLifetimeEach(200);
  violetGroup.setLifetimeEach(200);
  whiteGroup.setLifetimeEach(200);
  yellowGroup.setLifetimeEach(200);

  lightyellow();
  lightGreen();
  lightblue();
  lightorange();
  lightred();
  lightviolet();
  lightwhite();

 
    choice();
  

  createEdgeSprites();


 drawSprites();

 
}

function choice(){

    textSize(50);
    stroke("white");
    fill("white");

    switch(rand){
      case 1: text("Shoot the yellow ball", 500,50);
        if(yellowGroup.isTouching(rodGroup)){
          yellowGroup.destroyEach();
          rodGroup.destroyEach();
          score = score+1;
          newRandomNumber();
        }
        if(rodGroup.isTouching(greenGroup)|| rodGroup.isTouching(redGroup) || rodGroup.isTouching(blueGroup)|| rodGroup.isTouching(whiteGroup)
        || rodGroup.isTouching(violetGroup)|| rodGroup.isTouching(orangeGroup)){
          gameState = "end";
          }
      break;

      case 2: text("Shoot the green ball", 500,50);
        if(greenGroup.isTouching(rodGroup)){
          greenGroup.destroyEach();
          rodGroup.destroyEach();
          score = score+1;
          newRandomNumber();
        }
        if(rodGroup.isTouching(yellowGroup)|| rodGroup.isTouching(redGroup)|| rodGroup.isTouching(blueGroup)|| rodGroup.isTouching(orangeGroup)
        || rodGroup.isTouching(whiteGroup)|| rodGroup.isTouching(violetGroup)){
          gameState = "end";
          }
      break;

      case 3: text("Shoot the white ball", 500,50);
        if(whiteGroup.isTouching(rodGroup)){
          whiteGroup.destroyEach();
          rodGroup.destroyEach();
          score = score+1;
          newRandomNumber();
        }
        if(rodGroup.isTouching(yellowGroup)|| rodGroup.isTouching(redGroup)|| rodGroup.isTouching(greenGroup)|| rodGroup.isTouching(violetGroup)
        || rodGroup.isTouching(orangeGroup)|| rodGroup.isTouching(blueGroup)){
            gameState = "end";
          }
      break;

      case 4: text("Shoot the blue ball", 500,50);
        if(blueGroup.isTouching(rodGroup)){
          blueGroup.destroyEach();
          rodGroup.destroyEach();
          score = score+1;
          newRandomNumber();
        }
        if(rodGroup.isTouching(yellowGroup)|| rodGroup.isTouching(redGroup)|| rodGroup.isTouching(greenGroup)|| rodGroup.isTouching(violetGroup)
        || rodGroup.isTouching(orangeGroup)|| rodGroup.isTouching(whiteGroup)){
          gameState = "end";
          }
      break;

      case 5: text("Shoot the orange ball", 500,50);
      if(orangeGroup.isTouching(rodGroup)){
        orangeGroup.destroyEach();
        rodGroup.destroyEach();
        score = score+1;
        newRandomNumber();
      }
      if(rodGroup.isTouching(yellowGroup)|| rodGroup.isTouching(redGroup)|| rodGroup.isTouching(greenGroup)|| rodGroup.isTouching(violetGroup)
      || rodGroup.isTouching(blueGroup)|| rodGroup.isTouching(whiteGroup)){
        gameState = "end";
        }
    break;

    case 6: text("Shoot the violet ball", 500,50);
    if(violetGroup.isTouching(rodGroup)){
      violetGroup.destroyEach();
      rodGroup.destroyEach();
      score = score+1;
      newRandomNumber();
    }
    if(rodGroup.isTouching(yellowGroup)|| rodGroup.isTouching(redGroup)|| rodGroup.isTouching(greenGroup)|| rodGroup.isTouching(blueGroup)
    || rodGroup.isTouching(orangeGroup)|| rodGroup.isTouching(whiteGroup)){
      gameState = "end";
      }
  break;

  case 7: text("Shoot the red ball", 500,50);
  if(redGroup.isTouching(rodGroup)){
    redGroup.destroyEach();
    rodGroup.destroyEach();
    score = score+1;
    newRandomNumber();
  }
  if(rodGroup.isTouching(yellowGroup)|| rodGroup.isTouching(blueGroup)|| rodGroup.isTouching(greenGroup)|| rodGroup.isTouching(violetGroup)
  || rodGroup.isTouching(orangeGroup)|| rodGroup.isTouching(whiteGroup)){
    gameState = "end";
  }
 break;
    }
}

function newRandomNumber(){
  rand = Math.round(random(1,7));
}

//function mouseDragged(){
  //Matter.Body.setPosition(this.rod,{x:mouseX,y:mouseY});
//}

//function mouseReleased(){
 // slingShot.fly();
//}

//function keyPressed(){
 // if(keyCode===32){
   // Matter.Body.setPosition(this.rod,{x:500,y:400})

   // slingShot.attach(this.rod);
//}

//}

function lightGreen(){
  if(frameCount % 100 === 0){
    var gr = createSprite(200,-1000,10,10);
    gr.addImage(green);
    gr.scale = 0.5;
    gr.velocityY = 10;
    gr.lifetime = 100;
    gr.debug = false;
   // gr.setCollider("circle",0,2,70);
   
    greenGroup.add(gr);
  }

}

function lightblue(){
  if(frameCount % 500 === 0){
    var bl = createSprite(500,-1000,10,10);
    bl.addImage(blue);
    bl.scale = 0.5;
    bl.velocityY= 10;
    bl.lifetime = 100;
    bl.debug = false;
    //bl.setCollider("circle",0,2,70);

    blueGroup.add(bl);
  }

}

function lightorange(){
  if(frameCount % 700 === 0){
    var or = createSprite(1000,-1000,10,10);
    or.addImage(orange);
    or.scale = 0.5;
    or.velocityY = 10;
    or.lifetime = 100;
    or.debug = false;
    //or.setCollider("circle",0,2,70);

    orangeGroup.add(or);
  }

}

function lightred(){
  if(frameCount % 900 === 0){
    var re = createSprite(1300,-100,10,10);
    re.addImage(red);
    re.scale = 0.5;
    re.velocityY = 10;
    re.lifetime = 100;
    re.debug = false;
    re.setCollider("circle",0,2,70);

    redGroup.add(re);
  }

}

function lightviolet(){
  if(frameCount % 600 === 0){
    var vio = createSprite(650,-1000,10,10);
    vio.addImage(violet);
    vio.scale = 0.5;
    vio.velocityY = 10;
    vio.lifetime = 100;
    vio.debug = false;
   // vio.setCollider("circle",0,2,70);

    violetGroup.add(vio);
  }

}

function lightwhite(){
  if(frameCount % 300 === 0){
    var wh = createSprite(390,-1000,10,10);
    wh.addImage(white);
    wh.scale = 0.4;
    wh.velocityY = 10;
    wh.lifetime = 100;
    wh.debug = false;
   // gr.setCollider("circle",0,2,70);

    whiteGroup.add(wh);
  }

}

function lightyellow(){
  if(frameCount % 100 === 0){
    var yel = createSprite(850,-1000,10,10);
    yel.addImage(yellow);
    yel.scale = 0.5;
    yel.velocityY = 10;
    yel.lifetime = 100;
    yel.debug = false;
  //  gr.setCollider("circle",0,2,70);

    yellowGroup.add(yel);
  }

}

function createRod() {
  rod= createSprite(100,100, 5,10);
  rod.velocityY = -6;
  rod.scale = 0.2;
  rodGroup.add(rod);

  return rod;
}