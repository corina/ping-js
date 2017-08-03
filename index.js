var game = new Game();

function paddleAddEventListener() {
  document.addEventListener("keydown", keyDownHandler, false);
  // document.addEventListener("keyup", game.keyUpHandler, false);
};

function keyDownHandler(e) {
  player1Move(e);
  player2Move(e);
}

function player1Move(e) {
  if (e.keyCode == 65) {
    game.p1.moveUp();
  } else if (e.keyCode == 90) {
    game.p1.moveDown();
  }
}

function player2Move(e) {
  if (e.keyCode == 38) {
    game.p2.moveUp();
  } else if (e.keyCode == 40) {
    game.p2.moveDown();
  }
}

paddleAddEventListener();
game.start();
