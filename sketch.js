let strokeSize = 0.01;
let circleSize = 2;
let noiseValue = 0.0;
let bigBang = 0;
//------------------------------------------------------------------
function setup() {
  createCanvas(windowWidth*0.9, windowHeight*0.8);
  background(0);
}
//------------------------------------------------------------------
function draw() {
  let n = noise(noiseValue) * width;
  noiseValue += 0.1;
  if (noiseValue >= 1) {
    noiseValue = 0;
  }

  if (mouseIsPressed) {
    strokeWeight(0.01);
    stroke(random(200, 255), random(200, 255), random(200, 255));
    line(width - mouseX, height - mouseY, pmouseX, pmouseY);
    strokeWeight(strokeSize);
    line(mouseX, mouseY, pmouseX, pmouseY);
    // strokeWeight(0.01);
    // fill(0, 0, 0, 0)
    // ellipse(width/2, height/2, mouseX, mouseY);
    //large stars
    noStroke();
    fill(random(150, 255), random(150, 255), random(150, 255));
    circle(width - mouseX + random(-n/8, n/8), height - mouseY + random(-n/8, n/8), random(1, circleSize));
    circle(mouseX + random(-n/8, n/8), mouseY + random(-n/8, n/8), random(1, circleSize));
  }
  fill(0);
  bigBang += bigBang;
  circle(width/2, height/2, bigBang);
  if (bigBang >= width*2) {
    bigBang = 0;
  }
}
//------------------------------------------------------------------
function keyTyped() {
  if (key === 's') {
    console.log("Image saved");
    saveCanvas('fileName', 'png');
  }
  if (key === '=') {
    console.log("Stroke weight increased");
    console.log(strokeSize);
    strokeSize += 0.5;
    circleSize += 0.5;
  } else if (key === '-') {
    console.log("Stroke weight decreased");
    console.log(strokeSize);
    strokeSize -= 0.5;
    circleSize -= 0.5;
  }
  if (key === 'r') {
    bigBang = 1;
  }
  return false;
}
