var express = require('express'),
    bodyParser = require('body-parser'), 
    cors = require('cors'),
    app = express();  

const port = process.env.PORT || 9090;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json()); 

app.use(cors());

app.get('/', function(req, res){
    res.send('Breaking Bad REST api example.......................TEST');
});

app.listen(port, function(req, res){
	console.log('App is running on port:-' + port);
});