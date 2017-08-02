describe("Ball", function () {
  var ball, stack, canvas;

  canvas = document.createElement("canvas");

  beforeEach(function () {
    ball = new Ball(canvas);
    ball.draw(x = 240, y = 160, fillStyle="red");
    stack = JSON.parse(ball.ctx.json());
  });

  afterEach(function () {
    ball.ctx.clear();
  });

  describe("#draw", function () {
    it("responds to beginPath", function () {
      expect(stack[0].method).toBe("beginPath");
    });

    it("responds to arc", function () {
      expect(stack[1].method).toBe("arc")
    })

    it("has a fillstyle", function () {
      expect(stack[2].val).toBe("red")
    })

    it("responds to fill", function () {
      expect(stack[3].method).toBe("fill")
    })

    it("responds to closePath", function () {
      expect(stack[4].method).toBe("closePath")
    })
  });
});
