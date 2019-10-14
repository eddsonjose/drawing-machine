//How is the user's experience or interaction with the laptop/drawing related
//to "artificial is natural."
//connect imagination to universe/stars

let strokeSize = 3;
let circleSize = 3;
let bigBang = 0;
let textXPos;
let paragraph;
//------------------------------------------------------------------
function setup() {
  paragraph = createElement('p', 'What humans percieve as artificial is truly natural in a universal outlook because everything in the universe is made up of the same material - stardust. The human body, the mind, and its creations are a product of nature. What is unnatural is simply another name for manmade; it is a way to differentiate humanity with its cohabitants on Earth. Gender is another construct of humanity. Many say that there is naturally only two genders and anything more is considered unnatural. I say let there be a thousand genders because what makes a gender is what makes a human and what makes a human is nature. Let us believe what we want, let us form the stars into shapes, and let us be who we desire to be.');
  createCanvas(windowWidth * 0.9, windowHeight * 0.8);
  background(0);
  frameRate(8);
  textXPos = width;
}
//------------------------------------------------------------------
function draw() {
  //stars and lines
  paragraph.size(5000, 15);
  paragraph.style('text-align:center');
  paragraph.position(textXPos * 2.8, 68);

  if (mouseIsPressed) {
    textXPos -= 5;
    strokeWeight(strokeSize);
    stroke(random(200, 255), random(200, 255), random(200, 255));
    // line(width - mouseX, height - mouseY, pmouseX, pmouseY);
    // strokeWeight(strokeSize);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // strokeWeight(0.01);//ellipse
    // fill(0, 0, 0, 0)//ellipse
    // ellipse(width/2, height/2, mouseX, mouseY);//ellipse
    // line(beginXPos, beginYPos, lastXPos, lastYPos);
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
  //text
  // rect(textXPos, 5, 1000, 25);
  // fill(255);
  // text('What humans percieve as artificial is truly natural in a universal outlook because everything in the universe is made up of the same material - stardust. The human body, the mind, and its creations are a product of nature. What is unnatural is simply another name for manmade; it is a way to differentiate humanity with its cohabitants on Earth. Gender is another construct of humanity. Many say that there is naturally only two genders and anything more is considered unnatural. I say let there be a thousand genders because what makes a gender is what makes a human and what makes a human is nature. Let us believe what we want, let us form the stars into shapes, and let us be who we desire to be.', textXPos, 20);
}
//------------------------------------------------------------------
function mouseReleased() {
  fill(random(200, 255), random(200, 255), random(200, 255));
  circle(mouseX, mouseY, 8);
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
    bigBang = 1;
    strokeSize = 3;
    circleSize = 3;
  }
  if (key === 'c') {
    strokeSize = 3;
    circleSize = 3;
  }
  return false;
}
