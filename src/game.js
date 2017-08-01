console.log("hello world");

var canvas = document.getElementById("pingCanvas");
var ctx = canvas.getContext("2d");

var paddle = new Paddle(canvas);
paddle.draw(canvas.width - paddle.paddleWidth, canvas.height / 2);
