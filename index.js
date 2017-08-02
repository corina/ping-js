var game = new Game(document.getElementById("pingCanvas"));

function paddleAddEventListener() {
  document.addEventListener("keydown", game.keyDownHandler, false);
  document.addEventListener("keyup", game.keyUpHandler, false);
};


paddleAddEventListener();
