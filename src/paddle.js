(function(exports) {

function Paddle(canvas, x = 0) {
  this.x = x
  this.canvas = canvas;
  this.height = 60;
  this.width = 10;
  this.ctx = this.canvas.getContext("2d")
}

Paddle.prototype.draw = function (y) {
  this.ctx.beginPath();
  this.ctx.rect(this.x, y, this.width, this.height);
  this.ctx.fillStyle = "green";
  this.ctx.fill();
  this.ctx.closePath();
};

exports.Paddle = Paddle;

})(this);
