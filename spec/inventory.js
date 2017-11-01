describe("Inventory Checker", function() {
   describe("Inventory suite", function() {
    beforeEach(function() {
    });

    it("Inventory", function() {
      var warehouse = {
      	hasInventory:function(){}
      }
  	  // spyOn(warehouse,"hasInventory").and.callFake(function(){
     //    		return true
  	  // })
      spyOn(warehouse,"hasInventory").and.returnValue(true)
      // spyOn(warehouse,"hasInventory").and.returnValue(true)
      var order = new Order(warehouse)
      order.add("mbp",1)
      var isPosted = order.post()
      expect(isPosted).toEqual(true);
      // expect(warehouse.hasInventory).not.toHaveBeenCalled();
      expect(warehouse.hasInventory).toHaveBeenCalled()
    });
    it("Inventory", function() {
      var warehouse = new Warehouse()
      warehouse.add("mbp",1)
      var order = new Order(warehouse)
      order.add("mbp",1)
      var r = warehouse.hasInventory(order.details)
      expect(r).toEqual(true);
    });
    it("Inventory", function() {
      var warehouse = new Warehouse()
      warehouse.add("mbp",1)
      var order = new Order(warehouse)
      order.add("mbp",2)
      var r = warehouse.hasInventory(order.details)
      expect(r).toEqual(false);
    });
  });
});
