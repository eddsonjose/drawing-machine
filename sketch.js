let strokeSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  strokeWeight(strokeSize);
}

function draw() {
  if (mouseIsPressed) {
    stroke(random(100, 200), random(100, 200), random(100, 200));
    line(mouseX, mouseY, 1.2*pmouseX, 1.2*pmouseY);
  }
}
