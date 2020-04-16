/You have to create some rectangles that fall from the top of the screen to 
//to the bottom
var rectY = [???];//replace the ??????

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectY.length; i++) {
    rect((i + 1) * 100, rectY[?], 50, 25);//replace the question mark
    rectY[i] += 1; // Replace this comment with an explanation
  }
}
