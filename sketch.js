let strokeSize = 0.01;

function setup() {
  createCanvas(windowWidth*0.9, windowHeight*0.8);
  strokeWeight(strokeSize);
  background(0);
}
//------------------------------------------------------------------
function draw() {
  if (mouseIsPressed) {
    stroke(random(200, 255), random(200, 255), random(200, 255));
    line(width - mouseX, height - mouseY, pmouseX, pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    noStroke();
    fill(random(200, 255), random(200, 255), random(200, 255));
    circle(width - mouseX, height - mouseY, random(1, 4));
    circle(mouseX, mouseY, random(1, 4));


  }
}

function keyTyped() {
  if (key === 's') {
    console.log("Image saved");
    saveCanvas('fileName', 'png');
  }
  return false;
}
