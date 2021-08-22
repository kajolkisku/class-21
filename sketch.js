var movingRect, fixRect
function setup() {
  createCanvas(1200, 800);
  movingRect = createSprite(400, 600, 80, 30);
  movingRect.shapeColor = "green"
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green"
  movingRect.velocityY = -5
  fixedRect.velocityY = 5
}

function draw() {
  background(255, 255, 255);
  bounceOff(movingRect,fixedRect)
  drawSprites();
}
