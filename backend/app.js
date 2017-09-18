// app.js => Luis Hidlago de Tena
var express    = require('express');       
var app        = express();                 
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5657;        // set our port
var router = express.Router();             



// define function to execute on resource
router.get('/', function(req, res) {
    res.json({ message: 'get response' });   
});

router.post('/', function(req, res) {
    res.json({ message: 'post response' });   
});

//define endpoint
app.use('/api', router);


app.listen(port);
console.log('listening on port port ' + port);