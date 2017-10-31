describe("todo app", function() {
  describe("todo ajax", function() {
    var net 
    beforeEach(function() {
      net  = new Net()
    });

    it("items fill by net", function() {
      todo.add("2")
      // expect(todo.count).toMatch(1);
      expect(todo.count()).toEqual(2);
    });
  });
});
