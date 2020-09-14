var  bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400); 
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(50, 200, 20, 30);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="black";
}

function draw() {
  background("white");
  bullet.velocityX = speed;
 
  

if (hascolided(bullet,wall)) {
 bullet.velocityX=0;
 var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
 
 if (damage>10) {
    wall.shapeColor=color(255,0,0);
 } else if (damage<10){
    wall.shapeColor=color(0,255,0);
 }
}

  drawSprites();
}

function hascolided(object1,object2){

  object1RightEdge=object1.x + object1.width;
  object2leftEdge=object2.x;

  if (object1RightEdge>=object2leftEdge) {
    return true;
  }
    return false;
}
