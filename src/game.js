(function (exports) {
  function Game(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.p1Location = this.canvas.height / 2;
    this.p2Location = this.canvas.height / 2;
    this.ballXLocation = this.canvas.width / 2;
    this.ballYLocation = this.canvas.height / 2;
    // this.ballDX = 2;
    // this.ballDY = -2;
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
    this.update();
    this.draw(); // render the updated changes
    requestAnimationFrame(function () {
      self.run()
    });
  };

  Game.prototype.update = function () {
    this._clearCanvas();
  };

  Game.prototype.draw = function () {
    this.p1.draw();
    this.p2.draw();
    this.ball.draw(this.ballXLocation, this.ballYLocation);
  };

  Game.prototype._clearCanvas = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  };

  exports.Game = Game;

})(this);
