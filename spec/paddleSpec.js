describe("Paddle", function () {
  var paddle, stack, canvas;

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
});
