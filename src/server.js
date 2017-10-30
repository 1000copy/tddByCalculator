var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
console.log(__dirname)
var public = path.join(__dirname, '../')
app.use('/',express.static(public))
var todos = []
function rs(){
  // todos = [
  //        {"subject":"s1"},
  //        {"subject":"s2"},
  //        {"subject":"s3"},
  //     ]
  var fs = require('fs');
  todos = JSON.parse(fs.readFileSync('a.json', 'utf8'));
  // todos 
}
rs()
app.put('/todo/:id', function (req, res) {
  var userkey = parseInt(req.params.id)
  todos[userkey] = req.body
  res.end( JSON.stringify(todos));
  rs()
})
app.delete('/todo/:id', function (req, res) {
  var userkey = parseInt(req.params.id)
  todos.splice(userkey,1)
  res.end( JSON.stringify(todos));
  rs()
})
app.get('/todo/:id', function (req, res) {
  var userkey = parseInt(req.params.id)
  res.end( JSON.stringify(todos[userkey]));
})
app.get('/todos', function (req, res) {
  res.end( JSON.stringify(todos));
})
app.post('/todo', function (req, res) {
  console.log(req.body)
  todos.push(req.body)
  res.end(JSON.stringify(todos))
  rs()
})
app.post('/todos', function (req, res) {
  todos = req.body
  res.end(JSON.stringify(todos))
  // rs()
  saveJson()
})
function saveJson(){
  var fs = require('fs');
  fs.writeFile("a.json", JSON.stringify(todos), function(err) {
      if(err) {
          return console.log(err);
      }
  });
}
var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("listening at http://%s:%s", host, port)
})