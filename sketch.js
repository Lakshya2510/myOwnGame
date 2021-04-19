var backgroundImg,runningBoyImg;
var runningBoy;

function preload() {
  backgroundImg=loadImage("images/track.png")
  runningBoyImg=loadAnimation("images/RBoy1.png","images/RBoy2.png","images/RBoy3.png",
  "images/RBoy4.png","images/RBoy5.png","images/RBoy6.png","images/RBoy7.png","images/RBoy8.png")
} 

function setup(){
  canvas = createCanvas(850,650);
  database = firebase.database();
  runningBoy=createSprite(750,550,50,50)
  runningBoy.addAnimation("running", runningBoyImg);
  runningBoy.scale = 0.5 


  
}


function draw(){
  background(backgroundImg);

  
  drawSprites()
}
