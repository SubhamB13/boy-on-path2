var path;
var boy,boy_walking;
var pathImage;
var invisibleBoundary1;
var invisibleBoundary2;

function preload(){
  //pre-load images
boy_walking = loadAnimation("Runner-1.png","Runner-2.png");
pathImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=2;
  path.scale=1.2;

  boy = createSprite(200,350);
  boy.addAnimation("walking",boy_walking);
  boy.scale=0.05;

  invisibleBoundary1 = createSprite(368,200,70,400);
  invisibleBoundary1.visible=false;

  invisibleBoundary2 = createSprite(38,200,70,400);
  invisibleBoundary2.visible=false;
  
}

function draw() {
  background("black");
  createEdgeSprites();

boy.x=mouseX;

boy.collide(invisibleBoundary1);
boy.collide(invisibleBoundary2);

if(path.y > 400){
  path.y = height/2;
}


  drawSprites();
}
