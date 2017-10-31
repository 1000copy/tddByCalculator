function Net(){

}
Net.prototype.getJson = function(url,done){
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText)
          done(myArr)
      }
  };
  xmlhttp.open("GET", url, true)
  xmlhttp.send()
}
Net.prototype.postJson = function(url,jsonBody,done){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText)
          done(myArr)
      }
  }
  xmlhttp.open("POST", url, true)
  xmlhttp.setRequestHeader('Content-Type', "application/json")
  xmlhttp.send(JSON.stringify(jsonBody))
}
Net.prototype.deleteUrl = function(url,done){
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText)
          done(myArr)
      }
  };
  xmlhttp.open("DELETE", url, true)
  xmlhttp.send()
}
Net.prototype.loadAll = function (callback){
    this.getJson("/todos",callback)
}
Net.prototype.saveAll = function (items,callback){
    this.postJson("/todos",items,callback)
}
Net.prototype.delete = function (id,callback){
  this.deleteUrl("/todo/"+id,function(items){
    callback(items)  
  })
}
Net.prototype.add = function (item,callback){
   this.postJson("/todo",item,function(items){
    callback(items) 
   })
}
Net.prototype.doneItem = function(item,callback){
    
}
Net.prototype.clearAll = function(callback){
  
}