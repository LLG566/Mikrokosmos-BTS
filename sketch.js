var x = 0;
var xx = 3;
var dx = 13;
var dxx = 22;
var y = 0;
var yy = 3;
var dy = 13;
var dyy = 22;

const STAR_COUNT = 50;
const SIZE = 1;
const STARS = [];

const Y_AXIS = 1;
let c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  c1 = color(7, 3, 66);
  c2 = color(115, 15, 190);

  
  noStroke();
  for (let i = 0; i < STAR_COUNT; i++) {
    STARS.push({
      x: random(width),
      y: random(height)
    });
  }
}

function draw() {
  
  setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);
 
  stroke(200,250,250);
  strokeWeight(2);
  line(x,y,xx,yy);
  x =x + dx;
  xx =xx + dxx;
  y =y + dy;
  yy =yy + dyy;

  if (y>=height){
    x=random(0,width);
    xx=x+3;
    y=random(0,height);
    yy=y+3;
  }
  
   for (let i = 0; i < STARS.length; i++) {
    const star = STARS[i];

    circle(star.x, star.y, SIZE); 
  }
  
  }

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } 
    
}
