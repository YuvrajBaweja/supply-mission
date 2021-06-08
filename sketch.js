var thickness, wall
var bullet,speed,weight
function setup() {

  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  //speed = random(55,90)
  thickness = random(40,78)
  speed = random(223,321)
  weight = random(30,52)


  height = random(400,1500)
  bullet = createSprite(20,100,60,50)
  wall = createSprite(1000,100,thickness,height/2)
  wall.shapeColor = (80,80,80)
  bullet.velocityX = speed;
  //hasCollided()
}

function draw() {
  background("red");  
  drawSprites();
 // hasCollided(bullet);

 
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0
    var damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor = color("orange")
    }
    if(damage<10)
    {
      wall.shapeColor = ("blue")
    }
    
  }

  //if(car.isTouching(wall)){
  //  car.velocityX= 0
  //}

 
}

function  hasCollided (ibullet,lwall)
  {
    bulletRightEdge = ibullet.x + ibullet.width
    wallLeftEdge = lwall.x
    if(bulletRightEdge >= wallLeftEdge)
   {
     return true
   }
   return false
  }
  

