function Order(product,qty){
  this.product = product
  this.qty = qty
  this.warehouse = {}
}
Order.prototype.post = function() {
	// var warehouse = new Warehouse()
	return  this.warehouse.hasInventory(this.product,this.qty) && sendmail()
};