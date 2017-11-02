describe("todo item", function() {
   describe("todo suite", function() {
    
    beforeEach(function() {
    
    });
    it("add item", function() {

      var order = new Order("mbp",10)
      order.warehouse.hasInventory =function(){}
      // spyOn(order.warehouse,"hasInventory").and.callFake(function(){
      //   return true
      // })
      spyOn(order.warehouse,"hasInventory").and.returnValue(true)
      var result = order.post()
      expect(result).toEqual(true);  
      expect(order.warehouse.hasInventory).toHaveBeenCalled()
      console.log(order.warehouse.hasInventory.calls.first().args[0])
    });
  });    
});
