describe("Game", function () {
  var game, canvas;

  canvas = document.createElement("canvas");

  beforeEach(function () {
    game = new Game(canvas);
    game.start();
    spyOn(game.ball, 'bounceWall');
    spyOn(game.ball, 'bouncePaddle');
  });

  describe("Initialisation", function () {
    it("has a canvas", function () {
      expect(game.canvas.id).not.toBe(undefined)
    });
  });
  describe("#start", function () {
    it("has a paddle", function () {
      expect(game.p1).not.toBe(undefined)
    });
    it("has a second paddle", function () {
      expect(game.p2).not.toBe(undefined)
    });
    it("has a ball", function () {
      expect(game.ball).not.toBe(undefined)
    });
  });
  describe("#update", function () {
    it("can move the ball", function () {
      initialBallX = game.ball.x;
      initialBallY = game.ball.y;
      game.update();
      expect(game.ball.x).not.toEqual(initialBallX);
      expect(game.ball.y).not.toEqual(initialBallY);
    });
  });
  describe("#collisionDetection", function() {
    it("can detect a ball-wall collision", function() {
      game.ball.x = game.canvas.width / 2
      game.ball.y = 2;
      game.update();
      expect(game.ball.bounceWall).toHaveBeenCalled();
    })
    it("can detect a ball-rightPaddle collision", function() {
      game.ball.x = game.canvas.width - game.p2.width - game.ball.radius - 1
      game.ball.y = game.canvas.height/2 + 2
      game.ball.dy = 0
      game.update();
      expect(game.ball.bouncePaddle).toHaveBeenCalled();
    })
    it("can detect a ball-rightPaddle collision", function() {
      game.ball.x = game.ball.radius + game.p1.width + 1
      game.ball.y = game.canvas.height/2 + 2
      game.ball.dy = 0
      game.ball.dx = -2
      game.update();
      expect(game.ball.bouncePaddle).toHaveBeenCalled();
    })
  })
});
