describe("todo app", function() {
  describe("net ajax", function() {
    var net = new Net()
    var all = [{"id":1,"subject":"1f"},{"id":2,"subject":"2ffff1"}]
    beforeEach(function() {
    });
    it("stub", function() {
      expect(1).toEqual(1);
    });
    it("net", function(done) {
      
      net.saveAll(all,function(items){
        console.log(items)
        expect(items.length).toEqual(2);
        done()
      })
    });
    it("net", function(done) {
      net.loadAll(function(items){
        expect(items).toEqual(all);
        done()
      })
    });
    it("net add", function(done) {
      var item = {id:3,subject:"3f"}
      net.add(item,function(items){
        console.log(items)
        expect(items.length).toEqual(3);
        done()
      })
    });
    it("net delete", function(done) {
      var id = 3
      net.delete(id,function(items){
        console.log(items)
        expect(items.length).toEqual(2);
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

    it("save ajax", function() {
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
          // console.log(arr)
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
          done()
      })
    });
  });
});
