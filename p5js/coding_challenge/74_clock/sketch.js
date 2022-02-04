// https://www.youtube.com/watch?v=E4RyStef-gY&list=RDCMUCvjgXvBlbQiydffZU7m1_aw&index=2

let w = window.innerWidth > 0 ? window.innerWidth : screen.width;
let h = window.innerHeight > 0 ? window.innerHeight : screen.height;

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
  noStroke(255);

  strokeWeight(4);
  stroke(255);
  noFill();
  for (let i = 0; i < 30; i++) {
    ellipse(
      floor(w / 2) + Math.cos(ms / 100 + i * 5) * 50, // x pos
      -200 + 50 * i + Math.sin(ms / 100 + 50 * i) * 100, // y pos
      0 + mouseY, // width
      0 + (300 * mouseX) / w // height
    );
  }
}
