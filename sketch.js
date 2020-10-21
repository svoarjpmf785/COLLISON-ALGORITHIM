var fixedRect, moveRect;

function setup() {
  createCanvas(1200,600);

  fixedRect = createSprite(400, 200, 50, 100);
  moveRect = createSprite(600, 400, 60, 70);
  fixedRect.shapeColor = "green";
  moveRect.shapeColor = "green";
  //fixedRect.debug = true;
  //moveRect.debug = true;

}

function draw() {
  background(0,0,0);  

  moveRect.x = mouseX;
  moveRect.y = mouseY;

  if (moveRect.x-fixedRect.x<fixedRect.width/2+moveRect.width/2 && 
      fixedRect.x-moveRect.x<fixedRect.width/2+moveRect.width/2 &&
      moveRect.y-fixedRect.y<fixedRect.height/2+moveRect.height/2 && 
      fixedRect.y-moveRect.y<fixedRect.height/2+moveRect.height/2){

    fixedRect.shapeColor = "red";
    moveRect.shapeColor = "red";
  }
  else {
    fixedRect.shapeColor = "green";
    moveRect.shapeColor = "green";
  }

  drawSprites();
}