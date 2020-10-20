var express = require('express'),
    bodyParser = require('body-parser'), 
    cors = require('cors'),
    app = express();  

const port = process.env.PORT || 9090;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json()); 

app.use(cors());

app.get('/', function(req, res){
    res.send('Breaking Bad REST api example.......................');
});

app.get('/api', function(req, res){
    res.json({
        "characters": "https://breakingbadapi.com/api/characters",
        "episodes": "https://breakingbadapi.com/api/episodes",
        "quotes": "https://breakingbadapi.com/api/quotes",
        "deaths": "https://breakingbadapi.com/api/deaths"
    });
});

app.listen(port, function(req, res){
	console.log('App is running on port:-' + port);
});