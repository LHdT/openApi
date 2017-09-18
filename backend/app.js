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
    res.json({ message: 'Server working!! try other endpoints' });   
});

router.get('/person/name', function(req, res) {
    res.json({
                name : "Luis Hidalgo de Tena"
            });
});
router.get('/person/email', function(req, res) {
    res.json({
                email: "luishidalgodetena@gmail.com"
            });
});

// router.post('/', function(req, res) {
//     res.json({ message: 'post response' });   
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//add endpoints
app.use('/', router);
// router.res(
// 	res.header("Access-Control-Allow-Origin", "*");
//  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   	next();
// );


app.listen(port);
console.log('listening on port port ' + port);