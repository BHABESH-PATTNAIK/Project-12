var garden,rabbit;
var gardenImg,rabbitImg;
var apples;
var leaf;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leafImg   = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  //jump when the space key is pressed 
  if(keyDown("space")&& rabbit.y>=200){
  rabbit.velocityY=-7
  }
  rabbit.velocityY=rabbit.velocityY+0.6

  edges= createEdgeSprites();
  rabbit.collide(edges[3]);


 //spawn apples
 spawnApples();

 //spawn leaf
 spawnLeaf();

 console.log(frameCount)
  drawSprites();
}




//function to spawn apples
function spawnApples(){
// write the code here
if(frameCount%80===0){


  apples=createSprite(300,270,100,20);
  apples.addImage("apples");
  apples.y=Math.round(random(25,120));
  apples.velocityX=-3
  apples.scale=0.8
  apples.lifetime=260
}
}
// function to spawn leaf
function spawnLeaf(){


  if(frameCount%80===0){
  leaf=createSprite(300,240,150,10);
  leaf.addImage("leaf");
  leaf.y=Math.round(random(20,150));
  leaf.velocityX=-2
  leaf.scale=0.6
  leaf.lifetime=260

  }
}






























