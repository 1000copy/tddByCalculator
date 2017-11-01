describe("Inventory Checker", function() {
   describe("Inventory suite", function() {
    beforeEach(function() {
    });

    it("Inventory", function() {
      var warehouse = {
      	hasInventorys:function(){}
      }
  	  // spyOn(warehouse,"hasInventorys").and.callFake(function(){
     //    		return true
  	  // })
      spyOn(warehouse,"hasInventorys").and.returnValue(true)
      // spyOn(warehouse,"hasInventorys").and.returnValue(true)
      var order = new Order(warehouse)
      order.add("mbp",1)
      var isPosted = order.post()
      expect(isPosted).toEqual(true);
      // expect(warehouse.hasInventorys).not.toHaveBeenCalled();
      expect(warehouse.hasInventorys).toHaveBeenCalled()
    });
    it("Inventory", function() {
      var warehouse = new Warehouse()
      warehouse.add("mbp",1)
      var order = new Order(warehouse)
      order.add("mbp",1)
      var r = warehouse.hasInventorys(order.details)
      expect(r).toEqual(true);
    });
    it("Inventory", function() {
      var warehouse = new Warehouse()
      warehouse.add("mbp",1)
      var order = new Order(warehouse)
      order.add("mbp",2)
      var r = warehouse.hasInventorys(order.details)
      expect(r).toEqual(false);
    });
  });
});
