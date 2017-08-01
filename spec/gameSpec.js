describe("Game", function () {
  var game, canvas;

  canvas = document.createElement("canvas");

  beforeEach(function () {
    game = new Game(canvas);
  });

  describe("Initialisation", function () {
    it("has a canvas", function () {
      expect(game.canvas.id).not.toBe(undefined)
    });
  });
});
