var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
weight=random(25,30);

bullet = createSprite(500,200,30,10);
 bullet.shapeColor = "blue"
wall = createSprite(1200,200,60,100);

bullet.velocityX = 10;




 
 
  thickness=random(22,83);
 

}

function draw() {
  background("lime");

 
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed*speed/(thickness *thickness *thickness);


    if(damage>10)
     {
       wall.shapeColor=color(255,0,0);
       textSize(32);
       fill(0, 102, 153);
   text('The bullet is not  effective against the wall', 10, 30);
     }

     if(damage<10)
     {
       wall.shapeColor=color(0,255,0);
       textSize(32);
       fill(0, 102, 153);
   text('The bullet is not effective against the wall', 10, 30);
     }
  }


  
  drawSprites();
  
hascollided(bullet,wall);
}

function hascollided(lbullet,lwall)
{
  
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }  
  return false;
}