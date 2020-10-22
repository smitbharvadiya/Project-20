var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
speed=random(50,90);
weight=random(400,1500);
car=createSprite(50,200,50,50);
wall=createSprite(1300,200,60,height/2);
car.velocityX = speed;


}

function draw() {
  background(255,255,255);  
  if (wall.x - car.x < car.width/2 + wall.width/2
    && car.x - wall.x < car.width/2 +wall.width/2) {

      var d = 0.5*weight*speed*speed/22500;
   
    car.velocityX=0;
    if (d<100){
    car.shapeColor="green";
    }
    if(d>100&&d<180){
    car.shapeColor="yellow";
    }
    if(d>180){
      car.shapeColor="red";

    }
    }