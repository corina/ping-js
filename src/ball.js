(function(exports){
  function Ball(canvas, radius) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d");
    this.radius = radius;
    this.dx = 2;
    this.dy = -2;
    this.x = 240;
    this.y = 160;
  }

  Ball.prototype.draw = function (x = 240, y = 160) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.radius, 0, Math.PI*2, false)
    this.ctx.fillStyle = "black"
    this.ctx.fill();
    this.ctx.closePath();
  }

  Ball.prototype.moveBall = function () {
    this.draw(this.x, this.y);
    this.x += this.dx;
    this.y += this.dy;
    requestAnimationFrame(this.moveBall.bind(this));
  };


exports.Ball = Ball;

})(this);
