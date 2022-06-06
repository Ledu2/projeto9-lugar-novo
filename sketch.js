var box;
function setup() {
  createCanvas(400,400);
  
  box = createSprite(200,200,30,30);
}

function draw() 
{
  background("darkblue");

  if(keyDown(LEFT_ARROW)){
    background("red");
    box.x = box.x - 5;
  }
  if(keyDown(RIGHT_ARROW)){
    background("green");
    box.x = box.x + 5;
  }
  if(keyDown(UP_ARROW)){
    background("blue");
    box.y = box.y - 5;
  }
  if(keyDown(DOWN_ARROW)){
    background("lightblue");
    box.y = box.y + 5;
  }
  drawSprites();
}
