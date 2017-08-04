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
                                   p2 = new Paddle(this.playfield, this.playfield.width - p1.width),
                                   ball = new Ball(this.playfield)) {
    this.p1 = p1;
    this.p2 = p2;
    this.ball = ball;
    this.eventListener();
    this.animateFrame();
  };

  Game.prototype.eventListener = function() {
    document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
  };

  Game.prototype.keyDownHandler = function(e) {
    this.p1.playerMove(e)
    this.p2.playerMove(e)
  }

Game.prototype.animateFrame = function () {
  var self = this;
  return requestAnimationFrame(function() {
    self.run();
  })
};

  Game.prototype.run = function () {
    this.update();
    this.draw();
    this.animateFrame();
  };

  Game.prototype.checkBallLocation = function () {
    if (this.ball.isOutOfBounds()) {
      this.ball = new Ball(this.playfield);
    }
  };

  Game.prototype.update = function () {
    this.ball.positionUpdate();
    this.collisionDetection();
    this.checkBallLocation();
  };

  Game.prototype.draw = function () {
    this.canvas.draw(this.p1, this.p2, this.ball);
  };

  Game.prototype.collisionDetection = function () {
    if (this._ballHitsTop()) {
      this.ball.bounceWall();
    }
    else if (this._ballHitsBottom()) {
      this.ball.bounceWall();
    }
    else if (this._ballHitsRightPaddle()){
      this.ball.bouncePaddle();
    }
    else if (this._ballHitsLeftPaddle()){
      this.ball.bouncePaddle();
    }
  };

  Game.prototype._ballHitsTop = function () {
    return this.ball.y + this.ball.dy - this.ball.radius < 0;
  };

  Game.prototype._ballHitsBottom = function () {
    return this.ball.y + this.ball.dy + this.ball.radius > this.playfield.height;
  };

  Game.prototype._ballHitsRightPaddle = function () {
    return this.ball.x + this.ball.dx + this.ball.radius > this.playfield.width - this.p2.width
    && this.ball.y + this.ball.dy + this.ball.radius > this.p2.location
    && this.ball.y + this.ball.dy + this.ball.radius < this.p2.location + this.p2.height
  }

  Game.prototype._ballHitsLeftPaddle = function () {
    return this.ball.x + this.ball.dx - this.ball.radius < this.p1.width
    && this.ball.y + this.ball.dy + this.ball.radius > this.p1.location
    && this.ball.y + this.ball.dy + this.ball.radius < this.p1.location + this.p1.height
  }

  exports.Game = Game;

})(this);
