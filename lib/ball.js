function Ball(x = 240, y = 160) {
  this.x = x
  this.y = y
}

Ball.prototype.drawBall = function (target) {
  var canvas = document.getElementById(target);
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(this.x, this.y, 4, 0, Math.PI*2, false)
  ctx.fillStyle = "Black";
  ctx.fill();
  ctx.closePath();
}
