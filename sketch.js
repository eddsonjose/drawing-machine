//Artificial is natural
//by Eddson Jose
let strokeSize = 3;
let circleSize = 3;
let bigBang = 0;
let textXPos;
let paragraph;
//------------------------------------------------------------------
function setup() {
  paragraph = createElement('p', 'What humans perceive as artificial is truly natural in a universal outlook because everything in the universe is made up of the same material – stardust. The human body, the mind, and its creations are a product of nature. What is unnatural is simply another name for man-made. Constellations are a human construct that we view as an object to believe in. Drawing with the stars will help change the scale of our perception of nature into the scale of the universe. Gender is another construct of humanity. Many say that there is naturally only two genders and anything more is considered unnatural. I say let there be a thousand genders because what makes a gender is what makes a human and what makes a human is nature. Let us believe what we want, let us form the stars into shapes, and let us be who we desire to be. Your drawing is what you believe in and your belief is natural.');
  createCanvas(windowWidth * 0.9, windowHeight * 0.8);
  background(0);
  frameRate(8);
  textXPos = width;
}
//------------------------------------------------------------------
function draw() {
  //scrolling paragraph outside of canvas
  paragraph.size(9000, 15);
  paragraph.style('text-align:center');
  paragraph.position(textXPos * 3.2, 68);
  //drawing stars and lines
  if (mouseIsPressed) {
    textXPos -= 5;
    strokeWeight(strokeSize);
    stroke(random(200, 255), random(200, 255), random(200, 255));
    line(mouseX, mouseY, pmouseX, pmouseY);
    noStroke();
    fill(random(150, 255), random(150, 255), random(150, 255));
    circle(width - mouseX + random(-100, 100), height - mouseY + random(-100, 100), random(1, circleSize));
    circle(mouseX + random(-100, 100), mouseY + random(-100, 100), random(1, circleSize));
  }
  //reset the canvas
  fill(0);
  bigBang += bigBang;
  circle(width/2, height/2, bigBang);
  if (bigBang >= width*2) {
    bigBang = 0;
  }
  //scrolling paragraph inside the canvas
  // rect(textXPos, 5, 9000, 25);
  // fill(255);
  // text('What humans percieve as artificial is truly natural in a universal outlook because everything in the universe is made up of the same material - stardust. The human body, the mind, and its creations are a product of nature. What is unnatural is simply another name for manmade. Gender is another construct of humanity. Many say that there is naturally only two genders and anything more is considered unnatural. I say let there be a thousand genders because what makes a gender is what makes a human and what makes a human is nature. Let us believe what we want, let us form the stars into shapes, and let us be who we desire to be. Keep drawing. Embellish it. Your drawing is what you believe in and your belief is natural.', textXPos, 20);
}
//------------------------------------------------------------------
//form a star on mouse press
function mousePressed() {
  fill(random(200, 255), random(200, 255), random(200, 255));
  circle(mouseX, mouseY, circleSize * 2);
}
//form a star on mouse release
function mouseReleased() {
  fill(random(200, 255), random(200, 255), random(200, 255));
  circle(mouseX, mouseY, circleSize * 2);
}
function keyTyped() {
  if (key === 's') {
    console.log("Image saved");
    saveCanvas('WeAreStardust', 'png');
  }
  if (key === '=') {
    console.log("Stroke weight increased");
    console.log(strokeSize);
    strokeSize += 1;
    circleSize += 1;
  } else if (key === '-') {
    console.log("Stroke weight decreased");
    console.log(strokeSize);
    strokeSize -= 1;
    circleSize -= 1;
  }
  if (key === 'r') {
    console.log("Canvas reset");
    console.log(strokeSize);
    bigBang = 1;
    strokeSize = 3;
    circleSize = 3;
  }
  if (key === 'c') {
    console.log("Stroke size reset");
    console.log(strokeSize);
    strokeSize = 3;
    circleSize = 3;
  }
  return false;
}
