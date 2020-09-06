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
 
  /*if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    
    bullet.velocityX=0;
    var deformation=0.5 * wight*speed*speed/225099;
     
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }

   if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }

   if (deformation<100) 
   {  
      bullet,shapeColor=color(0,255,0);
   }
  }*/

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

function hascolided(lbullet,lwall){

  lbulletRightEdge=lbullet.x + lbullet.width;
  lbulletleftEdge=lwallleftEdge;

  if (lbulletRightEdge>=lwallleftEdge) {
    return true;
  }
    return false;
}