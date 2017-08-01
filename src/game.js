// var canvas = document.getElementById("pingCanvas");
//
// var paddle = new Paddle(canvas);
// var ball = new Ball(canvas, 4);
// paddle.draw(canvas.width - paddle.width, canvas.height / 2);
// ball.draw();

(function (exports) {
  function Game(canvas) {
    this.canvas = canvas;
    this.p1Location = this.canvas.height / 2;
    this.p2Location = this.canvas.height / 2;
    this.ballXLocation = this.canvas.width / 2;
    this.ballYLocation = this.canvas.height / 2;
  }

  Game.prototype.start = function (p1 = new Paddle(this.canvas),
                                   p2 = new Paddle(this.canvas, this.canvas.width - p1.width),
                                   ball = new Ball(this.canvas, 4)) {
    this.p1 = p1;
    this.p2 = p2;
    this.ball = ball;
    this.run();
  };

  Game.prototype.run = function () {
    var self = this;
    // this.update(); // change the game's state - ball moving, score, paddles moving
    this.draw(); // render the updated changes
    requestAnimationFrame(function () {
      self.run()
    });
  };

  Game.prototype.draw = function () {
    this.p1.draw(this.p1Location);
    this.p2.draw(this.p2Location);
    this.ball.draw(this.ballXLocation, this.ballYLocation);
  };

  exports.Game = Game;

})(this);
