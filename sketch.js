var car,bullet;
var bullet,speed,weight;
var wall, thickness

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(1200, 200, thickness, height/2);
  bullet.shapeColor = ("cyan")
  car=createSprite(50,200,50,50)
  speed=random(223,321)
  weight=random(30,52);
  car.velocityX = speed;
  car.shapeColor = ("white");
  thickness=random(22,83)
}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
car.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
if(damage>180){
  car.shapeColor=color(255,0,0);
}
if(damage<180 && damage>100){
  car.shapeColor=color(230,230,0)
} 
if(damage<10){
    wall.shapeColor=color(0,255,0)
}
  }
  drawSprites();
}

var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
if(damage>10){
  wall.shapeColor=color(255,0,0);
}
 
if(damage<10){
    wall.shapeColor=color(0,255,0)
}
  



function hasCollided (bullet,wall){
bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true 
}
return false;
}