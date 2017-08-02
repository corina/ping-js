(function (exports) {
  function Game(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")
    this.p1Location = this.canvas.height / 2;
    this.p2Location = this.canvas.height / 2;
    this.ballXLocation = this.canvas.width / 2;
    this.ballYLocation = this.canvas.height / 2;
    this.ballDX = 2;
    this.ballDY = -4;
  }

  Game.prototype.start = function (p1 = new Paddle(this.canvas),
                                   p2 = new Paddle(this.canvas, this.canvas.width - p1.width),
                                   ball = new Ball(this.canvas)) {
    this.p1 = p1;
    this.p2 = p2;
    this.ball = ball;
    this.run();
  };

  Game.prototype.run = function () {
    var self = this;
    this.update(); // change the game's state - ball moving, score, paddles moving
    this.draw(); // render the updated changes
    requestAnimationFrame(function () {
      self.run()
    });
  };

  Game.prototype.update = function () {
    this._clearCanvas();
    this.ballPositionUpdate();
    this.ballDirectionUpdate();
  }

  Game.prototype.ballPositionUpdate = function () {
    this.ballXLocation += this.ballDX;
    this.ballYLocation += this.ballDY;
  }

  Game.prototype.ballDirectionUpdate = function () {
    if (this.ballYLocation + this.ballDY - this.ball.radius < 0) {
      this.ballDY = -this.ballDY
    } else if (this.ballYLocation + this.ballDY + this.ball.radius > this.canvas.height) {
      this.ballDY = -this.ballDY
    }
  };

  Game.prototype.draw = function () {
    this.p1.draw(this.p1Location);
    this.p2.draw(this.p2Location);
    this.ball.draw(this.ballXLocation, this.ballYLocation);
  };

  Game.prototype._clearCanvas = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  };
  exports.Game = Game;

})(this);
