describe("计算器", function() {
   describe("one suite", function() {
    beforeEach(function() {
    });

    it("one test", function() {
      expect(true).toEqual(true);
    });
    it("normal test,1+1=2", function() {
      click("1")
      click("+")
      click("1")
      click("=")
      expect(getAnswer()=="2").toEqual(true);
    });
     it("normal test,1C", function() {
      click("1")
      click("C")
      expect(getAnswer()=="0").toEqual(true);
    });
    it("1 != 01", function() {
      click("1")
      console.log(getAnswer())
      expect(getAnswer()=="1").toEqual(true);
    });
  });
  describe("one suite for OO", function() {
    beforeEach(function() {
    });

    it("one test", function() {
      expect(true).toEqual(true);
    });
  });
});
