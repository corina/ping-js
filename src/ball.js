(function(exports){
  function Ball(canvas, radius = 4) {
    this.STARTANGLE = 0
    this.ENDANGLE = Math.PI*2
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d");
    this.radius = radius;
  }

  Ball.prototype.draw = function (x, y, fillStyle = "black") {
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.radius, this.STARTANGLE, this.ENDANGLE)
    this.ctx.fillStyle = fillStyle
    this.ctx.fill();
    this.ctx.closePath();
  }

exports.Ball = Ball;

})(this);
