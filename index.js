var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

app.set('port', (process.env.PORT || 8081));

//Engine HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname + '/public')));

//Render views - views is directory for all template files
app.set('views', __dirname + '/views');

router.get('/', function(request,response){
  response.render('index'); 
});

router.get('/elements', function(request,response){
  response.render('elements'); 
});

router.get('/proto', function(request,response){
  response.send('srenko');
});

app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});