//You have to create some rectangles that fall from the top of the screen to 
//to the bottom
var rectY = [0,0,0,0,0,0,0,0];//replace the ??????
var h =     [0,0,0,0,0,0,0,0];

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  colorMode(HSB)
  strokeWeight(3);
  rectMode(CENTER);
  
  for (var i = 0; i < rectY.length; i++) {
    if (rectY[i] > width) {rectY[i] = 0} 
    h[i] += 1
    fill(h[i] * (i + 1),360,360)
    if (h[i] >= 360 / (i+1)) {h[i] = 0}
    rect((i+0.2) * 50, rectY[i], 40, 10);//replace the question mark
    rectY[i] += i+1  //Makes it move
  }
}
