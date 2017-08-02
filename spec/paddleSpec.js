describe("Paddle", function () {
  var paddle, stack, canvas, location;

  canvas = document.createElement("canvas");
  ctx = canvas.getContext("2d");

  beforeEach(function () {
    paddle = new Paddle(canvas);
    paddle.draw();
    stack = JSON.parse(ctx.json({ loose: true }));
  });

  afterEach(function () {
    ctx.clear();
  });

  describe("#draw", function () {
    it("responds to beginPath", function () {
      console.log(JSON.parse(ctx.json()));
      expect(stack[0]).toBe("beginPath");
    });

    it("responds to rect", function () {
      expect(stack[1]).toBe("rect");
    });

    it("has a fillStyle", function () {
      expect(stack[2]).toBe("fillStyle");
    });

    it("responds to fill", function () {
      expect(stack[3]).toBe("fill");
    });

    it("responds to closePath", function () {
      expect(stack[4]).toBe("closePath");
    });
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
        paddle.location = canvas.height;
        paddle.moveDown();
        expect(paddle.location).toBe(canvas.height);
      });
    });
  });
});
