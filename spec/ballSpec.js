describe("Ball", function () {
  var ball, playfield, stack;

  playfield = {
    width: 100,
    height: 100
  }

  beforeEach(function () {
    ball = new Ball(playfield);
  });

  describe("#bounceWall", function () {
    it("can bounce", function () {
      ballDirection = ball.dy;
      ball.bounceWall();
      expect(ball.dy).toBe(-ballDirection);
    });
  });

  describe("#accelerate", function() {
    it("can increase speed along the y axis", function () {
      ballYSpeed = ball.dy;
      multiplier = 1.1;
      ball.accelerate(multiplier);
      expect(Math.abs(ball.dy)).toBeGreaterThan(Math.abs(ballYSpeed));
    })
    it("can increase speed along the x axis", function () {
      ballXSpeed = ball.dx;
      multiplier = 1.1;
      ball.accelerate(multiplier);
      expect(Math.abs(ball.dx)).toBeGreaterThan(Math.abs(ballXSpeed));
    })
  })
});
