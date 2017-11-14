function Order(warehouse){
	this.details = []
	this.warehouse = warehouse
}
Order.prototype.add = function(product,qty) {
	this.details.push({product:product,qty:qty})
}
Order.prototype.post = function() {
	return this.warehouse.hasInventorys(this.details)
};

function Warehouse(){
	this.items = []
}
Warehouse.prototype.add = function(product,qty) {
	this.items.push({product:product,qty:qty})

};
Warehouse.prototype.hasInventorys = function(details) {
	for (var i = 0; i < details.length; i++) {
		var item = details[i]
		if (!this.hasInventory(item))return false
	}
	return true
};
Warehouse.prototype.hasInventory = function(orderingItem) {
	for (var i = 0; i < this.items.length; i++) {
		if (orderingItem.product == this.items[i].product)
			return  orderingItem.qty <= this.items[i].qty
	}
	return false
};