(function(exports){
  function Ball(playfield, radius = 4) {
    this.radius = radius;
    this.x = playfield.width / 2;
    this.y = playfield.height / 2;
    this.dx = 2;
    this.dy = -4;
  }

  Ball.prototype.positionUpdate = function () {
    this.x += this.dx;
    this.y += this.dy;
  }

  Ball.prototype.bounce = function (surface) {
    if (surface = "wall") {
      this.dy = -this.dy;
    }
  //  else if (surface = "paddle") {
  //    this.dx = -this.dx;
  //  }
  };

exports.Ball = Ball;

})(this);
