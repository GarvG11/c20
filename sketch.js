var movingRect,fixedRect;

var object1,object2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(100, 200, 50, 50);
  movingRect.shapeColor = "green";
  object1 = createSprite(100, 300, 50, 50);
  object1.shapeColor = "blue";
  object2 = createSprite(400, 300, 50, 50);
  object2.shapeColor = "blue";
  object1.velocityX = 2;
  object2.velocityX = -2;

}

function draw() 
{
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  if(movingRect.x -fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 )
    {
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
    }
    else
    {
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";

    }

    if(object1.x -object2.x <= object1.width/2 + object2.width/2 && 
      object2.x - object1.x <= object1.width/2 + object2.width/2 && 
      object1.y - object2.y <= object1.height/2 + object2.height/2 && 
      object2.y - object1.y <= object1.height/2 + object2.height/2 )
      {
        object2.shapeColor = "red";
        object1.shapeColor = "red";

        object1.velocityX = -1 * 2;
        object2.velocityX = -1 * -2;
      }
        

  drawSprites();
}