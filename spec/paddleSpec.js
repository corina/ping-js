describe("Paddle", function () {
  var paddle, playfield, location;

  playfield = {
    width: 100,
    height: 100
  }

  beforeEach(function () {
    paddle = new Paddle(playfield);
  });

  describe("Movement", function () {
    beforeEach(function () {
      location = paddle.location;
    });

    describe("#moveUp", function () {
      it("moves the paddle up the canvas", function () {
        paddle.moveUp();
        expect(paddle.location).not.toBe(location);
      });

      it("Does not move the paddle out of bounds", function () {
        paddle.location = 0;
        paddle.moveUp();
        expect(paddle.location).toBe(0);
      });
    })

    describe("#moveDown", function () {
      it("moves the paddle down the canvas", function () {
        paddle.moveDown();
        expect(paddle.location).not.toBe(location);
      });

      it("Does not move the paddle out of bounds", function () {
        paddle.location = playfield.height;
        paddle.moveDown();
        expect(paddle.location).toBe(playfield.height - paddle.height);
      });
    });
  });
});
