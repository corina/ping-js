(function(exports){
  function Ball(canvas, radius) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d");
    this.radius = radius
  }

  Ball.prototype.draw = function (x = 240, y = 160) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.radius, 0, Math.PI*2, false)
    this.ctx.fillStyle = "black"
    this.ctx.fill();
    this.ctx.closePath();
  }

exports.Ball = Ball;

})(this);
