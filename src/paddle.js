(function(exports) {

function Paddle(height, width) {
  this.paddleHeight = 60;
  this.paddleWidth = 10;
  this.paddleX = (canvas.width - this.paddleWidth)/2;
}

Paddle.prototype.draw = function (y) {
  ctx.beginPath();
  ctx.rect(this.paddleX, y, this.paddleWidth, this.paddleHeight);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
};

exports.Paddle = Paddle;

})(this);
