var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8081));

//Engine HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//app.use(express.static(__dirname + '/public'));

//Render views - views is directory for all template files
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});