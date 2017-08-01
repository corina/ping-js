console.log("hello world");

var canvas = document.getElementById("pingCanvas");
var ctx = canvas.getContext("2d");

var paddle = new Paddle();
paddle.draw(canvas.height / 2);
