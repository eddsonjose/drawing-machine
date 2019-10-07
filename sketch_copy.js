let strokeSize = 0.01;
let circleSize = 2;
let noiseValue = 0.0;

function setup() {
  createCanvas(windowWidth*0.9, windowHeight*0.8);
  background(0);
}
//------------------------------------------------------------------
function draw() {

  // frameRate(1);

  strokeWeight(strokeSize);
  let n = noise(noiseValue) * random(0, 255);

  if (mouseIsPressed) {
    stroke(random(200, 255), random(200, 255), random(200, 255));
    line(width - mouseX, height - mouseY, pmouseX, pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    fill(0, 0, 0, 0)
    ellipse(width/2, height/2, mouseX, mouseY);
    //large stars
    noStroke();
    fill(random(150, 255), random(150, 255), random(150, 255));
    circle(width - mouseX + random(-20, 20), height - mouseY + random(-20, 20), random(1, circleSize));
    circle(mouseX + random(-20, 20), mouseY + random(-20, 20), random(1, circleSize));
    //small stars
    fill(255, 255, 255, random(230, n));
    circle(random(0, width), random(0, height), 1);
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
    strokeSize += 0.05;
    circleSize += 0.5;
  } else if (key === '-') {
    console.log("Stroke weight decreased");
    console.log(strokeSize);
    strokeSize -= 0.05;
    circleSize -= 0.5;
  }
  return false;
}
