var fixedRect, movingRect;
var object1,object2,object3,object4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;
object1=createSprite(100, 250, 30, 50);
object1.shapeColor="blue";

object2=createSprite(200, 250, 30, 50);
object2.shapeColor="pink";

object3=createSprite(300, 250, 30, 50);
object3.shapeColor="white";

object4=createSprite(400, 250, 30, 50);
object4.shapeColor="yellow";

movingRect.velocityY=-5;
object1.velocityY=5;
}

function draw() {
  background("lightblue");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

   if (collisionAlg(movingRect,object1)) {
    movingRect.shapeColor = "red";
    object1.shapeColor = "red";

   }

   else {
    movingRect.shapeColor = "green";
    object1.shapeColor = "blue";
   }
bounceOff(movingRect,object1);
   drawSprites()

}
