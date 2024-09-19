let ratio = 0.8 ;

function setup() {
  createCanvas(windowWidth*ratio, windowHeight*ratio);
}

function draw() {
  ellipse(mouseX, mouseY, 10, 10);
}