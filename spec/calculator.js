describe("calculator Checker", function() {
  
  describe("normal flow", function() {
    beforeEach(function() {
    });

    it("1+2=3", function() {
      clear()
      click("1")
      click("+")
      click("2")
      click("=")
      expect(getResult()=="3").toEqual(true);
    });
    it("12+2.1=14.1", function() {
      clear()
      click("1")
      click("2")
      click("+")
      click("2")
      click(".")
      click("1")
      click("=")
      // console.log(getResult())
      expect(getResult()=="14.1").toEqual(true);
    });
    it("simpled test 12+2.1=14.1", function() {
      clear()
      clicks("12+2.1=")
      expect(getResult()=="14.1").toEqual(true);
    });
    it("1C", function() {
      clear()
      clicks("1C")
      expect(getResult()=="0").toEqual(true);
    });
    it("*/", function() {
      clear()
      clicks("*/")
      clicks("/")
      expect(getResult()=="0").toEqual(true);
    });
  });
  // 防御型的代码
   describe("exception flow", function() {
    beforeEach(function() {
    });
    // 处理操作符
    it("1++2=3", function() {
      clear()
      click("1")
      click("+")
      click("+")
      click("2")
      click("=")
      expect(getResult()=="3").toEqual(true);
    });
    it("1+-2=-1", function() {
      clear()
      click("1")
      click("+")
      click("-")
      click("2")
      click("=")
      expect(getResult()=="-1").toEqual(true);
    });
    it("4+/2=2", function() {
      clear()
      click("4")
      click("+")
      click("/")
      click("2")
      click("=")
      expect(getResult()=="2").toEqual(true);
    });
    // 处理小数点
    it("1..1", function() {
      clear()
      clicks("1..")
      expect(getResult()=="1.").toEqual(true);
    });
    it("1.0+4..", function() {
      clear()
      clicks("1.0+4..")
      expect(getResult()=="1.0+4.").toEqual(true);
    });
  });
   // unit test
   describe("unit test", function() {
    beforeEach(function() {
    });

    it("replaceLastChar", function() {
      expect(replaceLastChar("1+","-")=="1-").toEqual(true);
    });
     it("object Calculator", function() {
      var c = new Calculator()
      expect(c.getResult()=="0").toEqual(true);
    });
  });
});
