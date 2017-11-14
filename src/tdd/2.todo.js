function TodoApp(){
  this.net = new Net()
  this.items = []
}
TodoApp.prototype.add = function(str){
  this.items.push({subject:str})
}
TodoApp.prototype.count = function(){
  return this.items.length
}
TodoApp.prototype.clear = function(){
  this.items = []
}  
TodoApp.prototype.render = function(done){
  var that = this
  this.net.getJson("/todos",function(json) {
  	that.items = json
  	done()
  })
}  
TodoApp.prototype.saveAll = function(done){
  var that = this
  this.net.postJson("/todos",that.items,function(json) {
  	that.items = json
  	if (done)
  		done()
  })
} 
