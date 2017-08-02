(function(exports) {

function Paddle(canvas, x = 0) {
  this.SPEED = 10;

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
  if (this.location > 0) {
    this.location -= this.SPEED;
  } else {
    this.location = 0;
    }
  };

Paddle.prototype.moveDown = function () {
  if (this.location + this.height < this.canvas.height) {
    this.location += this.SPEED;
  } else {
    this.location = this.canvas.height - this.height;
  }
};

exports.Paddle = Paddle;

})(this);
