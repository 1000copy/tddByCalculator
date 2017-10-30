describe("todo app", function() {
   describe("todo suite", function() {
    var todo
    beforeEach(function() {
      todo = new TodoApp()
      todo.add("1")
    });

    it("add and do count", function() {
      todo.add("2")
      // expect(todo.count).toMatch(1);
      expect(todo.count()).toEqual(2);
    });
    it("clear", function() {
      todo.clear()
      expect(todo.count()).toEqual(0);
    });
    it("item equal", function() {
      expect(todo.items[0].subject).toMatch("1");
    });
    it("save all", function(done) {
      todo.add("2f")
      todo.saveAll(function(){
        expect(todo.items.length).toEqual(2)
        expect(todo.items[1].subject).toEqual("2f")
        done()
      })
    });
    it("save mock", function(done) {
      todo.add("2f")
      spyOn(todo.net,"postJson").and.callFake(function(){
        console.log(todo.net.postJson.calls.allArgs())
        expect(todo.net.postJson).toHaveBeenCalled();
        done()
      })
      todo.saveAll(function(){
       
      })
    });
  });
});
