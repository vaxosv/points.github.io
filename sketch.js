var font;
var vehicles = [];
var bull = false

function preload() {
  font = loadFont('./Courgette-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  var points = font.textToPoints("Programming Is Fun", 80, 210, 60, {
    sampleFactor: 0.25
  });
  textAlign(CENTER);
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
  if (bull) {
    show()
  }
  if(mouseY >= 400){
    bull = true
  }
}


function show() {
  fill(255)
  noStroke()
  text("you can't destroy this!! 😜", 100, 100)
  print("x", mouseX)
  print("y", mouseY)
}