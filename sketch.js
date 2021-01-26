var wall,thickness
var speed,weight,bullet
function setup() {
  createCanvas(1700,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2)
  speed=random(223,321)
  weight=random(400,1500)
  thickness=random(30,52)

}

function draw() {
  createCanvas(1500,400)
  background("black");  
  if (hasCollided(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
}
if (damage>10){
wall.shapeColor=color(255,0,0)

}
if (damage<10){
  wall.shapeColor=color(0,255,0)
  
  }
  hasCollided()
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width
  wallLeftEdge=Lwall.x
  if (bulletRightEdge>=wallLeftEdge){
  
  
    return true
  }
  
  return false
  }

