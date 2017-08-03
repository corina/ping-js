describe("Canvas", function () {
  var canvas, element, stack;

  element = document.createElement("canvas");
  ctx = element.getContext("2d");

  beforeEach(function () {
    canvas = new Canvas(element);

    ballMock = {
      x: 50,
      y: 50,
      radius: 4,
      STARTANGLE: 0,
      ENDANGLE: Math.PI*2
    };

    paddleMock = {
      x: 10,
      location: 10,
      width: 10,
      height: 10
    };

    canvas.draw(paddleMock, paddleMock, ballMock);
    stack = JSON.parse(ctx.json());
  });

  describe("#draw", function () {
    it("Clears the canvas before each draw", function () {
      expect(stack[0].method).toBe("clearRect");
    });

    describe("Drawing the ball", function () {
      it("responds to beginPath", function () {
        expect(stack[1].method).toBe("beginPath");
      });

      it("responds to arc", function () {
        expect(stack[2].method).toBe("arc")
      });

      it("has a fillstyle", function () {
        expect(stack[3].val).toBe(canvas.colour)
      });

      it("responds to fill", function () {
        expect(stack[4].method).toBe("fill")
      });

      it("responds to closePath", function () {
        expect(stack[5].method).toBe("closePath")
      });
    });

    describe("Drawing player 1's paddle", function () {
      it("responds to beginPath", function () {
        expect(stack[6].method).toBe("beginPath");
      });

      it("responds to rect", function () {
        expect(stack[7].method).toBe("rect")
      });

      it("has a fillstyle", function () {
        expect(stack[8].val).toBe(canvas.colour)
      });

      it("responds to fill", function () {
        expect(stack[9].method).toBe("fill")
      });

      it("responds to closePath", function () {
        expect(stack[10].method).toBe("closePath")
      });
    });

    describe("Drawing player 2's paddle", function () {
      it("responds to beginPath", function () {
        expect(stack[11].method).toBe("beginPath");
      });

      it("responds to rect", function () {
        expect(stack[12].method).toBe("rect")
      });

      it("has a fillstyle", function () {
        expect(stack[13].val).toBe(canvas.colour)
      });

      it("responds to fill", function () {
        expect(stack[14].method).toBe("fill")
      });

      it("responds to closePath", function () {
        expect(stack[15].method).toBe("closePath")
      });
    });
  });
});


// canvasMock = {
//   draw: function () {
//     return undefined;
//   },
//   width: 100,
//   height: 100
// };
//
// game = new Game(canvasMock);
// game.start();
// spyOn(game.ball, 'bounce');
// spyOn(canvasMock, 'draw');
//
//
//
//
//
//
//
//
//
// describe("Ball", function () {
//   var ball, playfield, stack;
//
//   playfield = {
//     width: 100,
//     height: 100
//   }
//   // canvas = document.createElement("canvas");
//
//   beforeEach(function () {
//     ball = new Ball(playfield);
//   });
//
//   // xdescribe("#draw", function () {
//   //   it("responds to beginPath", function () {
//   //     expect(stack[0].method).toBe("beginPath");
//   //   });
//   //
//   //   it("responds to arc", function () {
//   //     expect(stack[1].method).toBe("arc")
//   //   })
//   //
//   //   it("has a fillstyle", function () {
//   //     expect(stack[2].val).toBe("red")
//   //   })
//   //
//   //   it("responds to fill", function () {
//   //     expect(stack[3].method).toBe("fill")
//   //   })
//   //
//   //   it("responds to closePath", function () {
//   //     expect(stack[4].method).toBe("closePath")
//   //   })
//   // });
//
//   describe("#bounce", function () {
//     it("can bounce", function () {
//       console.log(ball.x);
//       ballDirection = ball.dy;
//       ball.bounce("wall");
//       expect(ball.dy).toBe(-ballDirection);
//     });
//   });
// });
