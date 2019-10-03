let strokeSize = 0.01;
let circleSize = 4;

function setup() {
  createCanvas(windowWidth*0.9, windowHeight*0.8);
  background(0);
}
//------------------------------------------------------------------
function draw() {
  strokeWeight(strokeSize);

  if (mouseIsPressed) {
    stroke(random(200, 255), random(200, 255), random(200, 255));
    line(width - mouseX, height - mouseY, pmouseX, pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    noStroke();
    fill(random(200, 255), random(200, 255), random(200, 255));
    circle(width - mouseX, height - mouseY, random(1, circleSize));
    circle(mouseX, mouseY, random(1, circleSize));
  }
}

function keyTyped() {
  if (key === 's') {
    console.log("Image saved");
    saveCanvas('fileName', 'png');
  }
  if (key === '=') {
    console.log("Stroke weight increased");
    console.log(strokeSize);
    strokeSize++;
    circleSize++;
  } else if (key === '-') {
    console.log("Stroke weight decreased");
    console.log(strokeSize);
    strokeSize--;
    circleSize--;
  }
  return false;

}
