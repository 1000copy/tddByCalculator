describe("todo item", function() {
   describe("todo suite", function() {
    var items
    beforeEach(function() {
       items = new Items()
    });
    it("add item", function(done) {
      spyOn(items.net,"add").and.callFake(function(item,callback){
          callback()
      })
      items.add(1,"todo item",function(){
        console.log(items.getAll())
        expect(items.getAll()).toEqual([{id:1,subject:"todo item",done:false}]);  
        done()
      })
    });
    it("mock loadFromRemote", function(done) {
      var items = new Items()
      spyOn(items.net,"loadAll").and.callFake(function(callback){
        callback([{id:1,subject:"todo item",done:false}])
      })
      items.loadFromRemote(function(){
        expect(items.getAll()).toEqual([{id:1,subject:"todo item",done:false}]);
        done()
      })      
    });
    it("mock delItem", function(done) {
      var items = new Items()
      spyOn(items.net,"loadAll").and.callFake(function(callback){
        callback([{id:1,subject:"todo item",done:false}])
      })
      spyOn(items.net,"delete").and.callFake(function(id,callback){
        items.items = []
        callback()
      })
      items.loadFromRemote(function(){
        expect(items.getAll()).toEqual([{id:1,subject:"todo item",done:false}]);
        // done()
        items.delete(1,function(){
          expect(items.getAll()).toEqual([]);
          done()
        })        
      })   
    });
    it("mock delItem more items", function(done) {
      var items = new Items()
      spyOn(items.net,"loadAll").and.callFake(function(callback){
        callback([{id:1,subject:"todo item",done:false},
                  {id:2,subject:"todo item2",done:false}])
      })
      spyOn(items.net,"delete").and.callFake(function(id,callback){
        callback()
      })
      items.loadFromRemote(function(){
        items.delete(1,function(){
          expect(items.getAll()).toEqual([{id:2,subject:"todo item2",done:false}]);
          done()
        })        
      })   
    });
    it("mock add ", function(done) {
      var items = new Items()
      spyOn(items.net,"loadAll").and.callFake(function(callback){
        callback([{id:1,subject:"todo item",done:false}])
      })
      spyOn(items.net,"delete").and.callFake(function(id,callback){
        callback()
      })
      spyOn(items.net,"add").and.callFake(function(item,callback){
          callback()
      })
      items.loadFromRemote(function(){
        items.add(2,"todo by add",function(){
          expect(items.getAll()).toEqual([
            {id:1,subject:"todo item",done:false},
            {id:2,subject:"todo by add",done:false}]);
          done()
        })        
      })   
    });
  });    
});
