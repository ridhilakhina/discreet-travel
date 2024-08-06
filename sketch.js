let testVariable = 128; 
let arrayOfColorChoices = ['green', 'blue', 'black', 'babypink'];
let myWonderfulTint;

function origami() {
  return random(arrayOfColorChoices);
}

function setup() {
  createCanvas(400, 400);
  
  myWonderfulTint = origami(); 
  
  background(myWonderfulTint);
}

function draw() {
  background(myWonderfulTint);
  strokeWeight(5)
  circle(random(400), random(400), 120);
}
