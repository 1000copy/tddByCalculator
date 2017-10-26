describe("Int Checker", function() {
   describe("isInt suite", function() {
    beforeEach(function() {
    });

    it("输入案例123返回true", function() {
      var result = isInt("123")
      expect(result).toEqual(true);
      // expect(result).toBeFalsy();
      // expect(player).not.toBePlaying(song);
    });
    it("输入案例123a返回false", function() {
      var result = isInt("123a")
      expect(result).toEqual(false);
      // expect(result).toBeFalsy();
      // expect(player).not.toBePlaying(song);
    });
    it("输入案例-123返回true", function() {
      var result = isInt("-123")
      expect(result).toEqual(true);
      // expect(result).toBeFalsy();
      // expect(player).not.toBePlaying(song);
    });
    it("输入案例1-23返回true", function() {
      var result = isInt("1-23")
      expect(result).toEqual(false);
      // expect(result).toBeFalsy();
      // expect(player).not.toBePlaying(song);
    });
    it("输入案例-返回false", function() {
      var result = isInt("-")
      expect(result).toEqual(false);
      // expect(result).toBeFalsy();
      // expect(player).not.toBePlaying(song);
    });
  });
  describe("isInt suite", function() {
    beforeEach(function() {
    });

    it("输入案例123返回true", function() {
      var result = isInt("123")
      expect(result).toEqual(true);
      // expect(result).toBeFalsy();
      // expect(player).not.toBePlaying(song);
    });
    it("输入案例123a返回false", function() {
      var result = isInt("123a")
      expect(result).toEqual(false);
      // expect(result).toBeFalsy();
      // expect(player).not.toBePlaying(song);
    });
    it("输入案例-123返回true", function() {
      var result = isInt("-123")
      expect(result).toEqual(true);
      // expect(result).toBeFalsy();
      // expect(player).not.toBePlaying(song);
    });
    it("输入案例1-23返回true", function() {
      var result = isInt("1-23")
      expect(result).toEqual(false);
      // expect(result).toBeFalsy();
      // expect(player).not.toBePlaying(song);
    });
    it("输入案例-返回false", function() {
      var result = isInt("-")
      expect(result).toEqual(false);
      // expect(result).toBeFalsy();
      // expect(player).not.toBePlaying(song);
    });
  });
});
