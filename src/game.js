var canvas = document.getElementById("pingCanvas");

var paddle = new Paddle(canvas);
var ball = new Ball(canvas, 4);
paddle.draw(canvas.width - paddle.width, canvas.height / 2);
ball.draw(x=240,y=160);
