

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

ctx.fillRect(20, 20, 100, 100);

let img = new Image();
// img = document.getElementById("sprite")
img.src = '../public/assets/sprite.png';
img.onload = function() {
  init();
};

function init(ctx) {
  ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16, 18);
}
