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