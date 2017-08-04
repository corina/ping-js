(function (exports) {
  function Canvas(element) {
    this.BALL_START_ANGLE = 0
    this.BALL_END_ANGLE = Math.PI*2
    this.element = element;
    this.ctx = this.element.getContext("2d");
    this.colour = "#FFF";
    this.width = element.width;
    this.height = element.height;
  };

  Canvas.prototype.draw = function (p1, p2, ball) {
    this._clear();
    this._drawBall(ball);
    this._drawPaddle(p1);
    this._drawPaddle(p2);
  };

  Canvas.prototype._drawBall = function (ball) {
    this.ctx.beginPath();
    this.ctx.arc(ball.x, ball.y, ball.radius, this.BALL_START_ANGLE, this.BALL_END_ANGLE);
    this.ctx.fillStyle = this.colour;
    this.ctx.fill();
    this.ctx.closePath();
  };

  Canvas.prototype._drawPaddle = function (paddle) {
    this.ctx.beginPath();
    this.ctx.rect(paddle.x, paddle.location, paddle.width, paddle.height);
    this.ctx.fillStyle = this.colour;
    this.ctx.fill();
    this.ctx.closePath();
  };

  Canvas.prototype._clear = function () {
    this.ctx.clearRect(0, 0, this.width, this.height)
  };

  exports.Canvas = Canvas;

})(this);
