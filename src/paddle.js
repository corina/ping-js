(function(exports) {

function Paddle(canvas, x = 0) {
  this.MOVEMENT_SPEED = 50;

  this.x = x
  this.canvas = canvas;
  this.height = 60;
  this.width = 10;
  this.ctx = this.canvas.getContext("2d");
  this.location = this.canvas.height / 2;
}

Paddle.prototype.draw = function () {
  this.ctx.beginPath();
  this.ctx.rect(this.x, this.location, this.width, this.height);
  this.ctx.fillStyle = "green";
  this.ctx.fill();
  this.ctx.closePath();
};

Paddle.prototype.moveUp = function () {
  if (this._withinTopBound()) {
    this.location -= this.MOVEMENT_SPEED;
  } else {
    this.location = 0;
    }
  };

Paddle.prototype.moveDown = function () {
  if (this._withinBottomBound()) {
    this.location += this.MOVEMENT_SPEED;
  } else {
    this.location = this.canvas.height - this.height;
  }
};

Paddle.prototype._withinTopBound = function () {
  return this.location > 0;
};

Paddle.prototype._withinBottomBound = function () {
  return this.location + this.height < this.canvas.height
};

exports.Paddle = Paddle;

})(this);
