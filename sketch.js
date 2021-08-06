var trex, trex_running, edges;
var groundImage;

function preload(){//preload function is used to load images and sounds
  trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600, 200)

  //create a trex sprite
  trex=createSprite(50, 160, 20, 50)
  trex.addAnimation("running", trex_running)
  trex.scale=0.5
  trex.x=50

  //edges=createEdgeSprites()
  //create a ground sprite
  ground= createSprite(200, 180, 400, 20)
  ground.addImage("ground", groundImage)
  ground.x=ground.width/2
  ground.velocityX=-4

  //create invisible ground
  invisibleGround=createSprite(200, 190, 400, 10)
  invisibleGround.visible=false
}

function draw(){
  //set background colour
  background("white")

 // ground.velocityX=-2
  console.log(trex.y)
  
  //trex jumps when space key is pressed
  if(keyDown("space") && trex.y>=100){
    trex.velocityY=-10
  }
  
  //infinite ground
  if(ground.x<0){
    ground.x=ground.width/2
  }
//add gravity
trex.velocityY=trex.velocityY+0.8


//stop trex from falling down
//trex.collide(edges[3])
trex.collide(invisibleGround)
  drawSprites()
}
