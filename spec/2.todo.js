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
        expect(todo.net.postJson).toHaveBeenCalled();
        // run callback
        todo.net.postJson.calls.allArgs()[0][2]()
        done()
      })
      todo.saveAll(function(f){
        console.log(todo.net.postJson.calls.allArgs())
        // console.log(f)
      })
    });
    it("waiter and cooker", function() {
      var cooker = {
        dish:function(){
          return 1
        }
      }
      var waiter = {
        req:function(dishtype){
          if (dishtype == "product")
             return 1
          else
             return cooker.dish()+1
        }
      }
      spyOn(cooker,"dish").and.callFake(function(){
        return 42
      })
      expect(waiter.req("product")).toEqual(1)
      expect(waiter.req("from sketch")).toEqual(43)
      expect(cooker.dish).toHaveBeenCalled()
    });
  });
});
