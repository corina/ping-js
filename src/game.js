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
    return this.ball.x + this.ball.dx - this.ball.radius < this.p2.width
    && this.ball.y + this.ball.dy + this.ball.radius > this.p2.location
    && this.ball.y + this.ball.dy + this.ball.radius < this.p2.location + this.p2.height
  }

  exports.Game = Game;

})(this);
