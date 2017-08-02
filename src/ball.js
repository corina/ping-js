(function(exports){
  function Ball(canvas, radius = 4) {
    this.STARTANGLE = 0
    this.ENDANGLE = Math.PI*2
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d");
    this.radius = radius;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.dx = 2;
    this.dy = -4;
  }

  Ball.prototype.draw = function (x, y, fillStyle = "black") {
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.radius, this.STARTANGLE, this.ENDANGLE)
    this.ctx.fillStyle = fillStyle
    this.ctx.fill();
    this.ctx.closePath();
  }

  Ball.prototype.positionUpdate = function () {
    this.x += this.dx;
    this.y += this.dy;
  }

  Ball.prototype.directionUpdate = function () {
    if (this.y + this.dy - this.radius < 0) {
      this.dy = -this.dy
    } else if (this.y + this.dy + this.radius > this.canvas.height) {
      this.dy = -this.dy
    }
  };

exports.Ball = Ball;

})(this);
