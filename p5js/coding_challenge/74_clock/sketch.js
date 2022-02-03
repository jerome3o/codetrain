// https://www.youtube.com/watch?v=E4RyStef-gY&list=RDCMUCvjgXvBlbQiydffZU7m1_aw&index=2

function setup() {
  let w = window.innerWidth > 0 ? window.innerWidth : screen.width;
  let h = window.innerHeight > 0 ? window.innerHeight : screen.height;
  createCanvas(w, h);
}

function draw() {
  background(0);
  let h = hour();
  let m = minute();
  let s = second();
  let ms = millis() % 1000;

  fill(255);
  noStroke(255);
  text(`${h}:${m}:${s}`, 10, 200);

  strokeWeight(4);
  stroke(255);
  noFill();
  ellipse(200 + ms, 200, 300, 300);
}
