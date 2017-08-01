describe("Ball", function () {
  var ball, stack, canvas;

  canvas = document.createElement("canvas");

  beforeEach(function () {
    ball = new Ball(canvas);
    ball.draw();
    stack = JSON.parse(ball.ctx.json({loose: true}));
  });

  afterEach(function () {
    ball.ctx.clear();
  });

  describe("#draw", function () {
    it("responds to beginPath", function () {
      expect(stack[0]).toBe("beginPath");
    });

    it("responds to arc", function () {
      expect(stack[1]).toBe("arc")
    })

    it("has a fillstyle", function () {
      expect(stack[2]).toBe("fillStyle")
    })

    it("responds to fill", function () {
      expect(stack[3]).toBe("fill")
    })

    it("responds to closePath", function () {
      expect(stack[4]).toBe("closePath")
    })
  });


});
