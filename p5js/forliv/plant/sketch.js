let w = window.innerWidth > 0 ? window.innerWidth : screen.width;
let h = window.innerHeight > 0 ? window.innerHeight : screen.height;

let yPotTop = h - h / 3
let yPotBottom = h - h / 6

let xPotTop = Math.max(w / 4, w / 2 - 150)
let xPotTopOther = w - xPotTop

let xPotBottom = Math.max(w / 3, w / 2 - 100)
let xPotBottomOther = w - xPotBottom

let yStemTop = h / 6

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(0);
  let h = hour();
  let m = minute();
  let s = second();
  let ms = millis() % 2500;

  fill(255);

  drawPlant()
  drawPot()
}

function drawPlant() {
  push()
  stroke(255)
  drawStem()

  pop()
}

function drawStem() {
  push()
  strokeWeight(10)
  stroke("green")
  strokeCap(ROUND);
  let nPoints = 50
  let nWiggles = 3
  let stemHeight = yStemTop - yPotTop
  let wiggleSize = 10

  function calcY(i) {
    return yPotTop + i * stemHeight / nPoints 
  }

  function calcX(i) {
    return Math.sin((i / nPoints)*2*Math.PI*nWiggles)*wiggleSize + w/2
  }

  let prev = 0
  for (let i = 1; i<nPoints; i++) {
    line(
      calcX(prev),
      calcY(prev),
      calcX(i),
      calcY(i)
    )

    prev = i
  }
  pop()
}

function drawPot() {
  push()
  strokeWeight(10);
  strokeCap(ROUND);
  stroke("#d74426");
  fill("#e2725b")
  quad(
    xPotTop, 
    yPotTop,
    xPotTopOther, 
    yPotTop,
    xPotBottomOther,
    yPotBottom,
    xPotBottom,
    yPotBottom,
  )  
  pop()
}