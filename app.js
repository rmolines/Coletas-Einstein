var express = require('express')
var app = express()

app.use(express.static('public'))

var server = app.listen(8080 , function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


app.get('/', function (req, res) {
  res.sendFile( __dirname + "/public/views/login-paciente.html")
})

app.get('/login-paciente', function (req, res) {
  res.sendFile(__dirname + '/public/views/login-paciente.html')
})

app.get('/menu-paciente', function (req, res) {
  res.sendFile(__dirname + '/public/views/menu-paciente.html')
})

app.get('/mapa', function (req, res) {
  res.sendFile(__dirname + '/public/views/map-view.html')
})