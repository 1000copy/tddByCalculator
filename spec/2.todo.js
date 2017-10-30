describe("todo app", function() {
   describe("todo suite", function() {
    var todo
    beforeEach(function() {
      todo = new TodoApp()
      todo.add("1")
    });

    xit("add and do count", function() {
      todo.add("2")
      // expect(todo.count).toMatch(1);
      expect(todo.count()).toEqual(2);
    });
    xit("clear", function() {
      todo.clear()
      expect(todo.count()).toEqual(0);
    });
    xit("item equal", function() {
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
  });
  xdescribe("todo ajax", function() {
    var todo
    beforeEach(function() {
      todo = new TodoApp()
      todo.add("1")
    });

    xit("save ajax", function() {
      todo.add("2")
      // expect(todo.count).toMatch(1);
      expect(todo.count()).toEqual(2);
    });
    it("load ajax async", function(done) {
      todo.add("2")
      var xmlhttp = new XMLHttpRequest();
      var url = "/todos";
      xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var myArr = JSON.parse(this.responseText);
              responseJson(myArr);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
      function responseJson(arr) {
          console.log(arr)
          expect(arr.length).toEqual(2);
          done()
      }
    });
    it("oo getJson", function(done) {
      var url = "/todos"
      var net = new Net()
      net.getJson(url,function(json){
          expect(json.length).toEqual(2);
          expect(json[0].subject).toEqual("1");
          done()
      })
    });
    it("oo postJson", function(done) {
      var url = "/todo"
      var net = new Net()
      var jsonBody = {"id" : "1","subject":"from front end"}
      net.postJson(url,jsonBody,function(json){
          expect(json.length).toEqual(3);
          expect(json[2].subject).toEqual("from front end");
          console.log(json)
          done()
      })
    });
  });
});
