(function(exports){
  function Ball(playfield, radius = 4) {
    this.radius = radius;
    this.playfield = playfield;
    this.x = playfield.width / 2;
    this.y = playfield.height / 2;
    this.dx = 0;
    this.dy = 0;
    this.initialDirection();
  }

  Ball.prototype.randomDXY = function () {
    var randomDXY = Math.random()
    if (randomDXY > 0.5) {
      return - (Math.random() * 4 + 2)
    } else {
      if (randomDXY < 0.5) {
        return Math.random() * 4 + 2
      }
    }
  };

  Ball.prototype.initialDirection = function () {
    this.dx = this.randomDXY();
    this.dy = this.randomDXY();
  };

  Ball.prototype.isOutOfBounds = function () {
    return this.x < 0 - this.radius || this.x > this.playfield.width + this.radius
  };

  Ball.prototype.positionUpdate = function () {
    this.x += this.dx;
    this.y += this.dy;
  }

  Ball.prototype.bounceWall = function () {
    this.dy = -this.dy;
  };

  Ball.prototype.bouncePaddle = function () {
    this.dx = -this.dx;
  };

  Ball.prototype.accelerate = function(multiplier) {
    this.dy = this.dy * multiplier
    this.dx = this.dx * multiplier
  }

exports.Ball = Ball;

})(this);
