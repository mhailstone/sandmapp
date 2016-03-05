var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// Serve up content from public directory
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});

app.get('/api', function (req, res) {
  res.end("Send email to: " + req.query['input_value'] + "@email.com!");
});
