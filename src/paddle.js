(function(exports) {

function Paddle(canvas) {
  this.canvas = canvas;
  this.height = 60;
  this.width = 10;
  this.ctx = this.canvas.getContext("2d")
}

Paddle.prototype.draw = function (x,y) {
  this.ctx.beginPath();
  this.ctx.rect(x, y, this.width, this.height);
  this.ctx.fillStyle = "green";
  this.ctx.fill();
  this.ctx.closePath();
};

exports.Paddle = Paddle;

})(this);
