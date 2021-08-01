var box;
var num1, num2;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

  num1 = createInput();
  num1.position(5,60);

}

function draw() 
{
   background(30);


   n1 = parseInt(num1.value());
   
   console.log(n1);
   fill("pink");
   textSize(30)
   //text(n1, 200, 200);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x + 5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




