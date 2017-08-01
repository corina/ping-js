function Ball() {

}

Ball.prototype.drawBall = function (target, x = 240, y = 160) {
  var canvas = document.getElementById(target);
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(x, y, 4, 0, Math.PI*2, false)
  ctx.fillStyle = "Black";
  ctx.fill();
  ctx.closePath();
}
