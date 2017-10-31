function HTTP(){

}
HTTP.prototype.getJson = function(url,done){
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
HTTP.prototype.postJson = function(url,jsonBody,done){
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
HTTP.prototype.deleteUrl = function(url,done){
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
function Net(){
  this.h = new HTTP()
}
Net.prototype.loadAll = function (callback){
    this.h.getJson("/todos",callback)
}
Net.prototype.saveAll = function (items,callback){
    this.h.postJson("/todos",items,callback)
}
Net.prototype.delete = function (id,callback){
  this.h.deleteUrl("/todo/"+id,function(items){
    callback(items)  
  })
}
Net.prototype.add = function (item,callback){
   this.h.postJson("/todo",item,function(items){
    callback(items) 
   })
}
Net.prototype.doneItem = function(item,callback){
    
}
Net.prototype.clearAll = function(callback){
  this.h.postJson("/todos",[],callback)
}