(function (exports) {
  function Game(canvas = new Canvas(document.getElementById('pingCanvas'))) {
    this.canvas = canvas;
    this.playfield = {
      width: canvas.width,
      height: canvas.height
    };

    this.p1Location = this.playfield.height / 2;
    this.p2Location = this.playfield.height / 2;
  }
  Game.prototype.start = function (p1 = new Paddle(this.playfield),
                                   p2 = new Paddle(this.canvas, this.playfield.width - p1.width),
                                   ball = new Ball(this.playfield)) {
    this.p1 = p1;
    this.p2 = p2;
    this.ball = ball;
    this.run();
  };

  Game.prototype.run = function () {
    var self = this;
    this.update();
    this.draw();
    requestAnimationFrame(function () {
      self.run();
    });
  };

  Game.prototype.update = function () {
    this.ball.positionUpdate();
    this.collisionDetection();
  };

  Game.prototype.draw = function () {
    this.canvas.draw(this.p1, this.p2, this.ball);
  };

  Game.prototype.collisionDetection = function () {
    if (this._ballHitsTop()) {
      this.ball.bounce("wall");
    }
    else if (this._ballHitsBottom()) {
      this.ball.bounce("wall");
    }
  };

  Game.prototype._ballHitsTop = function () {
    return this.ball.y + this.ball.dy - this.ball.radius < 0;
  };

  Game.prototype._ballHitsBottom = function () {
    return this.ball.y + this.ball.dy + this.ball.radius > this.canvas.height;
  };

  exports.Game = Game;

})(this);
