// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 1200;

drawFace(50, 50, 50, 50, "blue");
drawFace(175, 175, 75, 175, "red");
drawFace(700, 200, 150, 50, "green");

function drawFace(x, y, x2, y2, color) {
  ctx.beginPath();
  ctx.arc(x + 50, y + 50, x2 + 30, y2 + 30, 100 * Math.PI);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + 50, y + 50, x2, y2, Math.PI);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + 30, y + 10, 5, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.arc(x + 75, y + 10, 5, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.stroke();
}
