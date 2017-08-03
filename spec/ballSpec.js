describe("Ball", function () {
  var ball, playfield, stack;

  playfield = {
    width: 100,
    height: 100
  }

  beforeEach(function () {
    ball = new Ball(playfield);
  });

  describe("#bounce", function () {
    it("can bounce", function () {
      ballDirection = ball.dy;
      ball.bounce("wall");
      expect(ball.dy).toBe(-ballDirection);
    });
  });
});
