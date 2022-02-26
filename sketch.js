
function preload(){
  pathIMG = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2png")
}

function setup(){
  createCanvas(400,400);
  path = createSprite (200,200)
  path.addImage(pathIMG)
  path.velocityY=4
  path.scale=1.2

  //create sprites here
boy = createSprite (180,340,30,30)
boy.addAnimation("JackRunning",boyImg)
boy.scale=0.08}


function draw() {
  
  background(0);
drawSprites()
}
