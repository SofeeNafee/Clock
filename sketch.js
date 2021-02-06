var hr,min,sec,hAngle,mAngle,sAngle ;
function setup() {
  createCanvas(600,600);
  angleMode(DEGREES)
}

function draw() {
  background("Blue");  
  translate(300,300);
  hr=hour();
  min=minute();
  sec=second();
  sAngle=map(sec,0,60,0,360)
  mAngle=map(min,0,60,0,360)
  hAngle=map(hr%12,0,12,0,360)
  push ();
  rotate (sAngle);
  stroke ("Red");
  strokeWeight(7);
  line(0,0,100,0);
  pop ();
  push ();
  rotate (mAngle);
  stroke ("orange");
  strokeWeight(7);
  line(0,0,75,0);
  pop ();
  push ();
  rotate (hAngle);
  stroke ("yellow");
  strokeWeight(7);
  line(0,0,50,0);
  pop ();
  stroke("green");
  point (0,0);
  strokeWeight(10);
  noFill ();
  stroke("pink");
  arc (0,0,300,300,0,sAngle);
  stroke("purple");
  arc (0,0,280,280,0,mAngle);
  stroke("hotpink");
  arc (0,0,260,260,0,hAngle);
  
}
 