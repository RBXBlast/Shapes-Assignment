// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 1200
//Shape 1
rect(5, 5, 290, 150, "black", "7");
circle(75,75,50,0,2,"black");
rect(5, 5, 150, 290, "black", "7");
//Shape 2
rect(5,225,290,150,"blue","7.5");
rect(145,225,155,290,"blue","7.5");
circle(225,300,50,0,2,"blue");
//Shape 3
rect(5, 370, 290, 150, "red", "7");
circle(75,445,65,0,2,"red");
rect(5, 370, 150, 290, "red", "7");

//Functions
function rect(x, y, width, height, color, linewidth) {
  ctx.beginPath();
  ctx.lineWidth = linewidth;
  ctx.strokeStyle = color;
  ctx.rect(x, y, width, height);
  ctx.stroke();
}

function circle(x1,y1,x2,y2,r1,color) {
  ctx.beginPath();
  ctx.arc(x1, y1, x2, y2, r1 * Math.PI);
  ctx.strokeStyle = color;
  ctx.stroke();
}
