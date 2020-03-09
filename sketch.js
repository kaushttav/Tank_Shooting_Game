var part1;
var part2;
var part3;
var cannon;
var cannon_image;
var cannonBall;
var cannonBall_image;
function preload(){
  cannon_image = loadImage("cannon.jpg");
  cannonBall_image = loadImage("canonBall.png");
}
function setup() {
  var canvas = createCanvas(800,500);
  
}

function draw() {
  background("white")
  text("PRESS SPACE TO RELEASE CANNON BALLS!!",30,30);
  textStyle(ITALIC);
  text("CREATED BY : Kaushttav Karan",50,400);
  cannon = createSprite(200,200,30,30);
  cannon.addImage(cannon_image);
  cannon_image.resize(200,100);
  if (keyWentDown("SPACE")){
    cannonBall = createSprite(310,160,random(8,20),10);
    cannonBall.velocityX = random(10,16); 
    cannonBall.addImage(cannonBall_image);
    cannonBall_image.resize(40,40);
  }
  drawSprites();
}
 






  
