function Items(){
	this.items = []
	this.net = new Net()
}
Items.prototype.add = function(id,str,callback) {
	var item = {id:id,subject:str,done:false}
	var that = this
	this.net.add(item,function(){
		that.items.push(item)	
		callback()
	})
};
Items.prototype.getAll = function() {
	return this.items
};
Items.prototype.loadFromRemote = function(done) {
	var that = this
	this.net.loadAll(function(items){
		that.items = items
		done()
	})
};
Items.prototype.delete = function(id,callback) {
	var that = this
	this.net.delete(id,function(){
		for (var i = 0; i < that.items.length; i++) {
			var item = that.items[i]
			if (item.id == id){
				that.items.splice(i,1)
				callback()
				return
			}
		}
		callback()
	})
};
