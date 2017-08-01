(function(exports) {

function Paddle(canvas) {
  this.canvas = canvas;
  this.paddleHeight = 60;
  this.paddleWidth = 10;
}

Paddle.prototype.draw = function (x,y) {
  ctx.beginPath();
  ctx.rect(x, y, this.paddleWidth, this.paddleHeight);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
};

exports.Paddle = Paddle;

})(this);
